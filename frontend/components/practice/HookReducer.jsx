import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, "state");
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      {state.count}
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>decrement</button>
      <h1>Reducer Hook Learn</h1>
    </>
  );
};

export default ReducerHook;
