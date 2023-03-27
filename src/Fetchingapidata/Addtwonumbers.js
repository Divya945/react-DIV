import React, { useState } from 'react';

export default function Addtwonumbers() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(number1 + number2);
  function calculatetotal() {
    setTotal(number1 + number2);
  }
  return (
    <>
      <div className="taskblock">
        <h1>Adding Two Numbers</h1>
        <input
          Value={number1}
          type="number"
          onChange={(e) => setNumber1(+e.target.value)}
        />
        <input
          value={number2}
          type="number"
          onChange={(e) => setNumber2(+e.target.value)}
        />
        <button onClick={calculatetotal}>Add Numbers</button>
        <h2>Total = {total}</h2>
      </div>
    </>
  );
}
