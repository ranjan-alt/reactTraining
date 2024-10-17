import axios from "axios";

import { FETCH_PRODUCTS, SET_PRODUCTS } from "./constants";
import { put, takeLatest } from "redux-saga/effects";

function* fetchProductSaga() {
  try {
    const response = yield axios.get("https://fakestoreapi.com/products");
    console.log(response, "response");
    yield put({ type: SET_PRODUCTS, payload: response?.data });
  } catch (error) {
    console.error(error);
  }
}

export default function* productSaga() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductSaga);
}
