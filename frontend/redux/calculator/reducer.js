import { add } from "./actions";
import { ADD, SUBTRACT } from "./constants";

const initialState = {
  result: 0,
  currentnumber: 0,
  operator: null,
};

const calculateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        result: state.result + action.payload,
      };
    case SUBTRACT:
      return {
        ...state,
        result: state.result - action.payload,
      };
    default:
      return state;
  }
};

export default calculateReducer;
