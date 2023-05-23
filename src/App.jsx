import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className='container mt-5'>
      <h2>Counter {count}</h2> 
      <button className="btn btn-outline-secondary" onClick={increment}>+</button>
      {count > 0 && (
        <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
      )}
    </div>
  );
};

export default Counter;
