import React, { useState } from 'react';

import '../../styles/tests/RandomNumberGen.css';

export default function RandomNumberGen(props) {
  const [randomNum, setRandomNum] = useState(0);

  function handleClick() {
    const min = Number(document.getElementById('min-input').value) || 0;
    const max = Number(document.getElementById('max-input').value) || 1;
    const decimals =
      Number(document.getElementById('decimals-input').value) || 3;

    const newRandomNum = (min + Math.random() * (max - min)).toFixed(decimals);
    setRandomNum(newRandomNum);
  }

  return (
    <React.Fragment>
      <h3>Random Number Generator</h3>
      <p>{randomNum}</p>

      <form>
        <input type="text" placeholder="Min." name="min" id="min-input" />
        <input type="text" placeholder="Max." name="max" id="max-input" />
        <input
          type="text"
          placeholder="Decimals."
          name="decimals"
          id="decimals-input"
        />
        <button type="button" onClick={handleClick}>
          Generate!
        </button>
      </form>
    </React.Fragment>
  );
}
