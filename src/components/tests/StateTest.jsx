import React, { useState } from 'react';

export default function StateTest(props) {
  const [statedOne, setStatedOne] = useState(0);
  const [statedTwo, setStatedTwo] = useState(0);
  let noStatedOne = 0;
  let noStatedTwo = 0;

  const getRandom = () => {
    return Math.random();
  };

  const handleClickNoStated = () => {
    noStatedOne = getRandom();
    noStatedTwo = getRandom();
    printInfo();
  };

  const handleClickStatedOne = () => {
    setStatedOne(getRandom());
    printInfo();
  };

  const handleClickStatedTwo = () => {
    setStatedTwo(getRandom());
    printInfo();
  };

  const printInfo = () => {
    console.log(`
    | No stated one: ${noStatedOne}
    | No stated two:  ${noStatedTwo}
    | Stated one: ${statedOne}
    | Stated two: ${statedTwo}
    `);
  };

  return (
    <React.Fragment>
      <p>No stated one: {noStatedOne}</p>
      <p>Stated one: {statedOne}</p>
      <p>No stated two: {noStatedTwo}</p>
      <p>Stated two: {statedTwo}</p>
      <br />

      <p>[Open your dev console]</p>
      <br />

      <button type="button" onClick={handleClickNoStated}>
        No stated
      </button>

      <button type="button" onClick={handleClickStatedOne}>
        Stated one
      </button>

      <button type="button" onClick={handleClickStatedTwo}>
        Stated two
      </button>
    </React.Fragment>
  );
}
