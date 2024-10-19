import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MOBILE_COUNT, MOBILE_LIST, MOBILE_LIST_LOADING } from "./constant";
import axios from "axios";

// export const fetchMobile = createAsyncThunk("/fetchMobile", () => {
//   return axios.get("https://jsonplaceholder.typicode.com/todos");
// });

const mobileReducer = createSlice({
  name: "mobileReducer",
  initialState: {
    [MOBILE_LIST]: [],
    [MOBILE_COUNT]: 0,
  },
  reducers: {
    increaseMobileCount(state, action) {
      state[MOBILE_COUNT] = state[MOBILE_COUNT] + action.payload;
    },
    decreaseMobileCount(state, action) {
      state[MOBILE_COUNT] = state[MOBILE_COUNT] - action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchMobile.pending, (state, action) => {
    //     state[MOBILE_LIST_LOADING] = true;
    //   })
    //   .addCase(fetchMobile.fulfilled, (state, action) => {
    //     state[MOBILE_LIST_LOADING] = false;
    //     state[MOBILE_LIST] = action.payload;
    //   })
    //   .addCase(fetchMobile.rejected, () => {
    //     state[MOBILE_LIST_LOADING] = false;
    //   });
  },
});

export const { decreaseMobileCount, increaseMobileCount } =
  mobileReducer.actions;

export default mobileReducer.reducer;
