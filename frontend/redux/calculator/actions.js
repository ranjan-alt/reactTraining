import { ADD, SUBTRACT } from "./constants";

export const add = (value) => ({
  type: ADD,
  payload: value,
});

export const subtract = (value) => ({
  type: SUBTRACT,
  payload: value,
});
