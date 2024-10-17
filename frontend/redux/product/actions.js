import { FETCH_PRODUCTS } from "./constants";

export const fetchProduct = (payload) => {
  return {
    type: FETCH_PRODUCTS,
  };
};
