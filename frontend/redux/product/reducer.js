import { FETCH_PRODUCTS, SET_PRODUCTS } from "./constants";

//initial state and action types
const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action?.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export default productReducer;
