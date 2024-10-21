import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slice/counterslice";

const CountSlice = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterslice);
  console.log(count, "counterslice");

  const handleIncrease = () => {
    dispatch(increment());
    console.log(increment());
    // !vimp when you call increment or decrement it creates and object =====>>>> increment(): { type: 'counterslice/increment' }
  };

  const handleDecrease = () => {
    dispatch(decrement());
  };
  return (
    <>
      <h1>Counter using slice</h1>
      <p>{count}</p>
      <button onClick={handleIncrease}>Add</button>
      <button onClick={handleDecrease}>Subtract</button>
    </>
  );
};

export default CountSlice;
