import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterslice",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + 2;
    },
    decrement(state, action) {
      return state - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
