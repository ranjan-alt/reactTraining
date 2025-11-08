import React, { useState } from "react";

const HookUseState = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    count > 0 ? setCount((prev) => prev - 1) : 0;
  };
  return (
    <>
      <h2>Use State hook example</h2>
      <p>{count}</p>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrease}>Decrement</button>
    </>
  );
};

export default HookUseState;
