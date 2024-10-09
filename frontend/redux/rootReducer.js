import { combineReducers } from "redux";
import countReducer from "./count/reducer";
import authReducer from "./auth/reducer";

export const rootReducer = combineReducers({
  countReducer,
  authReducer,
});
