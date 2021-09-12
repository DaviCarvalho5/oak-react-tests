import React from 'react';

export default function Card(props) {
  const { cardTitle } = props;
  const { cardDescription } = props;
  const { removeCard } = props;
  const { handleOnChangeCardTitle } = props;
  const { handleOnChangeCardDescription } = props;
  const { onDragStart } = props;
  const { onDragEnd } = props;

  return (
    <div
      className="Card"
      draggable="true"
      onDrag={onDragStart}
      onDragEnd={onDragEnd}
    >
      <input
        type="text"
        value={cardTitle}
        onChange={handleOnChangeCardTitle}
        autoFocus
      />
      <textarea
        type="description"
        value={cardDescription}
        onChange={handleOnChangeCardDescription}
      />
      <button onClick={removeCard} className="BtnDelete">
        <img src="./images/delete.png" alt="" />
      </button>
    </div>
  );
}
