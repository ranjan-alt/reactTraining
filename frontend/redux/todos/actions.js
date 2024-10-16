import { ADD_TODO, FETCH_TODOS } from "./constants";

export function fetchTodos() {
  console.log("action -type", FETCH_TODOS);
  return {
    type: FETCH_TODOS,
  };
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}
