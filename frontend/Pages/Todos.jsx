import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodos, removeTodo } from "../redux/todos/actions";
import { useEffect } from "react";

const Todos = () => {
  const { fetch_todos, fetch_todos_pending, SELECTED_TODOS } = useSelector(
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
      <div style={{ height: "200px", overflow: "scroll" }}>
        {fetch_todos_pending
          ? "Loading..."
          : fetch_todos?.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    margin: "0 auto",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{item?.title}</div>
                  <button
                    style={{
                      border: "2px solid black",
                      margin: "5px",
                      borderRadius: "10px",
                      backgroundColor: "red",
                    }}
                    onClick={() => dispatch(addTodo(item))}
                  >
                    ADD
                  </button>
                </div>
              );
            })}
      </div>{" "}
      <div>
        <h1>Selected todo</h1>
        {SELECTED_TODOS.map((item, index) => {
          return (
            <div>
              <div
                style={{
                  display: "flex",
                  margin: "0 auto",
                  justifyContent: "space-between",
                }}
              >
                {item?.title}
              </div>
              <div>{item?.quantity}</div>
              <button
                style={{
                  border: "2px solid black",
                  margin: "5px",
                  borderRadius: "10px",
                  backgroundColor: "red",
                }}
                onClick={() => dispatch(removeTodo(item))}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todos;
