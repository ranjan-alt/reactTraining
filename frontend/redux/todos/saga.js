import axios from "axios";
import {
  FETCH_TODOS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_PENDING,
  SET_FETCH_TODOS_PENDING,
  SET_TODOS,
} from "./constants";

import { takeLatest, put, call } from "redux-saga/effects";

function* fetchTodos(params) {
  console.log("ranjan");
  try {
    yield put({ type: SET_FETCH_TODOS_PENDING, payload: true });
    const response = yield axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response, "data");
    if (response?.data?.length) {
      yield put({ type: SET_TODOS, payload: response.data });
    }
    yield put({ type: SET_FETCH_TODOS_PENDING, payload: false });
  } catch (error) {
    yield put({ type: FETCH_TODOS_ERROR, payload: error.message });
    yield put({ type: FETCH_TODOS_PENDING, payload: false });
  }
}

export default function* todoSaga() {
  yield takeLatest(FETCH_TODOS, fetchTodos);
}
