import React from 'react';

export default function HappyFace(props) {
  const { happymeter } = props;
  let text = '';

  text = ':) '.repeat(happymeter);

  return <p>{text}</p>;
}
