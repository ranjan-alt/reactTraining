import { combineReducers } from "redux";
import countReducer from "./count/reducer";
import authReducer from "./auth/reducer";
import calculateReducer from "./calculator/reducer";
import todoReducer from "./todos/reducer";
import productReducer from "./product/reducer";
import mobileReducer from "./slice/mobile";
import productReducerSlice from "./slice/product";
import counterslice from "./slice/counterSlice";

export const rootReducer = combineReducers({
  todoReducer,

  countReducer,
  authReducer,
  calculateReducer,
  productReducer,
  mobileReducer,
  productReducerSlice,
  counterslice,
});
