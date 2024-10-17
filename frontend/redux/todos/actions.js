import { ADD_TODO, FETCH_TODOS, REMOVE_TODO } from "./constants";
import { addTodo as addTodoApi } from "../../utils/todoApi";

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

export function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    payload: todo,
  };
}
