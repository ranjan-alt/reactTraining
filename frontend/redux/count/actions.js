import { INCREASE } from "./constants";

export function increase(value) {
  return {
    type: INCREASE,
    payload: value,
  };
}
