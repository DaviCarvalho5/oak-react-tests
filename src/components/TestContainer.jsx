import React from 'react';

import '../styles/TestContainer.css';

export default function TestContainer(props) {
  const { title } = props;
  const { createdAt } = props;
  const { comments } = props || '';

  return (
    <section className="TestContainer">
      <header>
        <div>
          <h2>{title}</h2>
          <p>{createdAt}</p>
        </div>
        <p>{comments}</p>
      </header>

      <section>{props.children}</section>
    </section>
  );
}
