import React from 'react';

export default function Column(props) {
  const { addCard } = props;
  const { removeColumn } = props;
  const { columnTitle } = props;
  const { handleOnChangeColumnTitle } = props;
  const { onDragOver } = props;
  const { onDragEnter } = props;

  return (
    <section className="Column">
      <header>
        <input
          type="text"
          value={columnTitle}
          onChange={handleOnChangeColumnTitle}
        />

        <button onClick={addCard}>
          <img src="./images/add.png" alt="" />
        </button>
      </header>

      <section
        className="DropZone"
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
      >
        {props.children}
      </section>

      <button className="BtnDelete" onClick={removeColumn}>
        <img src="./images/delete.png" alt="" />
      </button>
    </section>
  );
}
