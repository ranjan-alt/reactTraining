import { combineReducers } from "redux";
import countReducer from "./count/reducer";
import authReducer from "./auth/reducer";
import calculateReducer from "./calculator/reducer";
import todoReducer from "./todos/reducer";
import productReducer from "./product/reducer";
import mobileReducer from "./todoToolkit/mobile";

export const rootReducer = combineReducers({
  todoReducer,

  countReducer,
  authReducer,
  calculateReducer,
  productReducer,
  mobileReducer,
});
