import React, { useEffect, useRef, useState } from "react";

const PracticeHooks = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const inputRef = useRef();

  //   const countRef = useRef(0);
  //   const [renderCount, setRenderCount] = useState(0);
  //   const handleIncrement = () => {
  //     countRef.current += 1;
  //     console.log(countRef.current);
  //     setRenderCount(countRef.current);
  //   };
  //   const [count, setCount] = useState(0);
  //   const intervalRef = useRef(null);

  //   const StartInterval = () => {
  //     console.log(intervalRef.current, "current");
  //     intervalRef.current = setInterval(() => {
  //       setCount((prev) => prev + 1);
  //     }, 1000);
  //   };

  //   const StopInterval = () => {
  //     clearInterval(intervalRef.current);
  //   };
  //   const resetInterval = () => {
  //     StopInterval();
  //     setCount(0);
  //   };
  //   useEffect(() => {
  //     return clearInterval(intervalRef.current);
  //   }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <h1>Practice Hooks</h1>
      <p>Count:{count}</p>
      {/* <p>renderCount::{renderCount}</p> */}
      <button onClick={handleIncrement}>Increment</button>
      <input type="text" ref={inputRef} placeholder="focus me on load " />
      {/* <button onClick={StartInterval}>Start</button>
      <button onClick={StopInterval}>Stop</button>
      <button onClick={resetInterval}>Reset</button> */}
    </>
  );
};

export default PracticeHooks;
