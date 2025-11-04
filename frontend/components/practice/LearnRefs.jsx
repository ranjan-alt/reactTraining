import React, { useMemo, useState } from "react";

const LearnRef = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const doubleValue = useMemo(() => {
    return count * 2;
  }, [count]);
  return (
    <>
      <h1>Learn Refs</h1>
      <p>{count}</p>
      <p>double memoised:{doubleValue}</p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default LearnRef;
