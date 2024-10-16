import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/todos/actions";
import { useEffect } from "react";

const Todos = () => {
  const { fetch_todos, fetch_todos_pending } = useSelector(
    (state) => state?.todoReducer
  );
  console.log(fetch_todos, "main");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <>
      <h1>Todos</h1>
      <div>
        {fetch_todos_pending
          ? "Loading..."
          : fetch_todos?.map((item) => {
              return <div>{item?.title}</div>;
            })}
      </div>{" "}
    </>
  );
};

export default Todos;
