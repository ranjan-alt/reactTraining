import { INCREASE } from "./constants";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + action.payload };

    default:
      return state;
  }
};

export default countReducer;
