import { useDispatch, useSelector } from "react-redux";
import { increase } from "../redux/count/actions";
import Calculator from "./Calculator";
import { fetchTodos } from "../redux/todos/actions";
import todoReducer from "../redux/todos/reducer";
import Todos from "./Todos";

import { ProductProvider } from "../context/ProductContext";
import Product from "./ProductContextExample";
import ProductUsingRedux from "./ProductUsingRedux";

const Home = () => {
  // const countReducerState = useSelector((state) => state.countReducer);
  // const { count } = countReducerState;

  // const todoReducerState = useSelector((state) => state.todoReducer);
  // console.log(todoReducerState);
  // const { FETCH_TODOS, FETCH_TODOS_PENDING } = useSelector(
  //   (state) => state.todoReducer
  // );
  // console.log(FETCH_TODOS, "fetch_todo");
  // const dispatch = useDispatch();

  // const increaseButton = () => {
  //   dispatch(increase(1));
  // };

  return (
    <>
      <h1>Home</h1>
      {/* {count} */}
      {/* <button onClick={increaseButton}>Increase +</button> */}

      {/* <Calculator /> */}

      {/* <Todos /> */}
      {/* <ProductProvider>
        <Product />
      </ProductProvider> */}
      <ProductUsingRedux />
    </>
  );
};

export default Home;
