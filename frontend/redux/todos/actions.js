import { FETCH_TODOS } from "./constants";

export function fetchTodos() {
  console.log("action -type", FETCH_TODOS);
  return {
    type: FETCH_TODOS,
  };
}
