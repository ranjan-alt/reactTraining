import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCT_LIST } from "./constants";
import axios from "axios";

export const fetchProducts = createAsyncThunk("/fetchProducts", (payload) => {
  return axios.get("https://fakestoreapi.com/products");
});

const productReducerSlice = createSlice({
  name: "productReducerSlice",
  initialState: {
    [PRODUCT_LIST]: [], //!agr product hota then we can use state.product and if [PRODUCT] hain then state[PRODUCT]
    loading: false,
  },
  reducers: {
    addProductInAnArrayList(state, action) {
      //   const oldProductLIst = [...state[PRODUCT_LIST]];
      //   oldProductLIst.push(action.payload);
      //   state[PRODUCT_LIST] = oldProductLIst;
      //   state[PRODUCT_LIST] = [...state, action.payload];
      return {
        ...state,
        [PRODUCT_LIST]: [...state[PRODUCT_LIST], action.payload],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state[PRODUCT_LIST] = action?.payload?.data; // !imp agr data nahi dala toh data ek new object create ho jaega and fetchproduct hatt jaega
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { addProductInAnArrayList } = productReducerSlice.actions; // idhar me "s" isiay added hai kyuki we have mulitple action

export default productReducerSlice.reducer;
