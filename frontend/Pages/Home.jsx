import { useDispatch, useSelector } from "react-redux";
import { increase } from "../redux/count/actions";

const Home = () => {
  const countReducerState = useSelector((state) => state.countReducer);
  const { count } = countReducerState;
  const dispatch = useDispatch();

  const increaseButton = () => {
    dispatch(increase(1));
  };
  return (
    <>
      <h1>Home</h1>
      {count}
      <button onClick={increaseButton}>Increase +</button>
    </>
  );
};

export default Home;
