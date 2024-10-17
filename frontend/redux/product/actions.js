import { FETCH_PRODUCTS } from "./constants";

export const fetchProduct = () => {
  return {
    type: FETCH_PRODUCTS,
  };
};
