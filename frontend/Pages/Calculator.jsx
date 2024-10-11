import { useDispatch, useSelector } from "react-redux";
import { add, subtract } from "../redux/calculator/actions";
import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(0);
  const calculateReducerState = useSelector((state) => state.calculateReducer);
  const { result } = calculateReducerState;
  const dispatch = useDispatch();
  const handleAdd = (num) => {
    dispatch(add(Number(input)));
  };

  const handleSubtract = (num) => {
    dispatch(subtract(Number(input)));
  };

  const handleInputChange = (e) => {
    console.log(e, "console");
    setInput(e.target.value);
  };

  return (
    <>
      {result}
      <input type="number" onChange={handleInputChange} value={input} />
      <div>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <button onClick={handleSubtract}>Subtract</button>
      </div>
    </>
  );
};

export default Calculator;
