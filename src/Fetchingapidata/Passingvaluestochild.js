import React from 'react';

const { useState, useContext } = React;
const CountContext = React.createContext();

/**
 * Counter Component
 */
function Counter() {
  const { count, increase, decrease } = useContext(CountContext);
  return (
    <div className="taskblock">
      <h2>
        <button onClick={decrease}>Decrement</button>
        <span className="count">{count}</span>
        <button onClick={increase}>Increment</button>
      </h2>
    </div>
  );
}

/**
 * App Component
 */
export default function Passingvaluestochild() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <CountContext.Provider value={{ count, increase, decrease }}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}
