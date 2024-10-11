import { combineReducers } from "redux";
import countReducer from "./count/reducer";
import authReducer from "./auth/reducer";
import calculateReducer from "./calculator/reducer";

export const rootReducer = combineReducers({
  countReducer,
  authReducer,
  calculateReducer,
});
