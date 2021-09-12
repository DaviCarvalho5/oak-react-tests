import React, { useState, useEffect } from 'react';
import Column from './Column';
import Card from './Card';

import '../../../styles/tests/Kanban.css';

export default function Kanban(props) {
  const [nextColumnId, setNextColumnId] = useState(0);
  const [columns, setColumns] = useState([
    // {
    //   id: nextColumnId,
    //   title: '',
    // },
  ]);

  const [nextCardId, setNextCardId] = useState(0);
  const [cards, setCards] = useState([
    // {
    //   id: nextCardId,
    //   title: '',
    //   description: '',
    //   columnId,
    // },
  ]);

  const [dragImage, setDragImage] = useState({ img: '' });

  useEffect(() => {
    const localColumns = JSON.parse(
      localStorage.getItem('oak-kanban-columns-1578') || []
    );

    const localNextColumnId = JSON.parse(
      localStorage.getItem('oak-kanban-nextColumId-1578') || '0'
    );

    const localCards = JSON.parse(
      localStorage.getItem('oak-kanban-card-1578') || []
    );

    const localNextCardId = JSON.parse(
      localStorage.getItem('oak-kanban-nextCardId-1578') || '0'
    );

    setColumns(localColumns);
    setNextColumnId(localNextColumnId);
    setCards(localCards);
    setNextCardId(localNextCardId);

    const img = document.createElement('img');
    img.src = './images/drag-card.png';
    img.onload = () => {
      setDragImage({ img });
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('oak-kanban-columns-1578', JSON.stringify(columns));
    localStorage.setItem(
      'oak-kanban-nextColumId-1578',
      JSON.stringify(nextColumnId)
    );
    localStorage.setItem('oak-kanban-card-1578', JSON.stringify(cards));
    localStorage.setItem(
      'oak-kanban-nextCardId-1578',
      JSON.stringify(nextCardId)
    );
  }, [columns, cards, nextColumnId, nextCardId]);

  //
  // Columns
  //

  function handleOnChangeColumnTitle(columnId, newTitle) {
    let newColumns = [...columns];

    newColumns.forEach((column) => {
      if (column.id === columnId) {
        column.title = newTitle;
      }
    });

    setColumns(newColumns);
  }

  function addColumn() {
    let newColumns = [...columns];

    newColumns.push({
      id: nextColumnId,
      title: '',
    });

    setColumns(newColumns);
    setNextColumnId(nextColumnId + 1);
  }

  function removeColumn(columnId) {
    let newColumns = [...columns];
    let newCards = [...cards];

    newColumns = newColumns.filter((column) => column.id !== columnId);
    newCards = newCards.filter((card) => card.columnId !== columnId);

    setCards(newCards);
    setColumns(newColumns);
  }

  //
  // Cards
  //

  function handleOnChangeCardTitle(cardId, newTitle) {
    let newCards = [...cards];

    newCards.forEach((card) => {
      if (card.id === cardId) {
        card.title = newTitle;
      }
    });

    setCards(newCards);
  }
  function handleOnChangeCardDescription(cardId, newDescription) {
    let newCards = [...cards];

    newCards.forEach((card) => {
      if (card.id === cardId) {
        card.description = newDescription;
      }
    });

    setCards(newCards);
  }

  function addCard(columnId) {
    let newCards = [...cards];

    newCards.unshift({
      id: nextCardId,
      title: '',
      description: '',
      columnId,
    });

    setCards(newCards);
    setNextCardId(nextCardId + 1);
  }

  function revomeCard(cardId) {
    let newCards = [...cards];

    newCards = newCards.filter((card) => card.id !== cardId);

    setCards(newCards);
  }

  function changeCardColumn(cardId, newColumnId) {
    let newCards = [...cards];

    newCards.forEach((card) => {
      if (card.id === cardId) {
        card.columnId = newColumnId;
      }
    });

    setCards(newCards);
  }

  //
  // Drag and Drop
  //

  let dragedCardId = null;
  let enteredColumnId = null;
  let isDragging = false;

  function onDragStart(event, cardId) {
    event.dataTransfer.setDragImage(dragImage.img, 100, 100);
    event.preventDefault();

    if (isDragging) return;
    dragedCardId = cardId;
  }

  function onDragEnd() {
    changeCardColumn(dragedCardId, enteredColumnId);
    dragedCardId = null;
    isDragging = false;
  }

  function onDragEnter(event, columnId) {
    event.preventDefault();
    enteredColumnId = columnId;
  }

  //
  // Return
  //

  return (
    <section id="kanban" className="FlexRow">
      {columns.map((column) => {
        return (
          <Column
            key={column.id}
            columnId={column.id}
            columnTitle={column.title}
            addCard={() => addCard(column.id)}
            removeColumn={() => removeColumn(column.id)}
            handleOnChangeColumnTitle={(e) =>
              handleOnChangeColumnTitle(column.id, e.target.value)
            }
            onDragOver={(event) => event.preventDefault()}
            onDragEnter={(event) => onDragEnter(event, column.id)}
          >
            {cards.map((card) => {
              if (card.columnId === column.id) {
                return (
                  <Card
                    key={card.id}
                    cardTitle={card.title}
                    cardDescription={card.description}
                    removeCard={() => revomeCard(card.id)}
                    handleOnChangeCardTitle={
                      (card.id,
                      (e) => handleOnChangeCardTitle(card.id, e.target.value))
                    }
                    handleOnChangeCardDescription={
                      (card.id,
                      (e) =>
                        handleOnChangeCardDescription(card.id, e.target.value))
                    }
                    onDragStart={(e) => onDragStart(e, card.id)}
                    onDragEnd={(e) => onDragEnd(e)}
                  />
                );
              }

              return null;
            })}
          </Column>
        );
      })}
      <button id="btn-add-column" onClick={addColumn}>
        <img src="./images/add.png" alt="" />
      </button>
    </section>
  );
}
