import React, { useState } from 'react';
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
      changeBackgroundColor();
    }
  };

  const handleDecrement = () => {
    if (count > -10) {
      setCount(count - 1);
      changeBackgroundColor();
    }
  };

  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ backgroundColor }}>

      <button onClick={handleIncrement}>+</button>
      <p>say: {count}</p>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
