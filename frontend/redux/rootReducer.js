import { combineReducers } from "redux";
import countReducer from "./count/reducer";
import authReducer from "./auth/reducer";
import calculateReducer from "./calculator/reducer";
import todoReducer from "./todos/reducer";

export const rootReducer = combineReducers({
  todoReducer,

  countReducer,
  authReducer,
  calculateReducer,
});
