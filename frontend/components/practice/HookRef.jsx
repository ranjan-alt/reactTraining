import React, { useEffect, useRef, useState } from "react";

const HookRef = () => {
  const inputRef = useRef();
  const intervalRef = useRef(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    inputRef.current.focus();
    return clearInterval(intervalRef.current);
  }, []);

  const handleIncrement = () => {
    setInterval(() => {
      intervalRef.current += 1;
      setCount(intervalRef.current);
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };
  return (
    <>
      <h1>Ref hooks</h1>
      <p>{count}</p>
      <input type="text" ref={inputRef} placeholder="focus me on load" />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={stopInterval}>Decrement</button>
    </>
  );
};

export default HookRef;
