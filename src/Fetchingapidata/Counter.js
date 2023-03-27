import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const counthandler = (type) => {
    type === 'increment' ? setCount(count + 1) : setCount(count - 1);
  };
  return (
    <>
      <div className="taskblock">
        {' '}
        <h3>Increase and decrease number </h3>
        <h3>Count Number : {count}</h3>
        <button onClick={() => counthandler('increment')}>Increase</button>
        <button onClick={() => counthandler('decrement')}>decrease</button>
      </div>
    </>
  );
}
