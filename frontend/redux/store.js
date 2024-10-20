// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./rootReducer";
// import { applyMiddleware, createStore } from "redux";
// import createSagaMiddleware from "redux-saga";
// import productSaga from "./product/saga";
// // import todoSaga from "./todos/saga";

// const sagaMiddleware = createSagaMiddleware(); //A function to create middleware for handling side effects in Redux using Redux Saga.

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = configureStore({
//   reducer: rootReducer, //This is the combined reducer that manages all slices of state in your application.
//   middleware: () => [sagaMiddleware],
// });
// // export const store = createStore(rootReducer,sagaMiddleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// // sagaMiddleware.run(todoSaga);
// sagaMiddleware.run(productSaga);
// ============================================================================
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import productSaga from "./product/saga";
import { all } from "redux-saga/effects";
import todoSaga from "./todos/saga";

const sagaMiddleware = createSagaMiddleware();

// function* rootSaga() {
//   yield all([productSaga(), todoSaga()]);
// }

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: () => [sagaMiddleware],
// });

// sagaMiddleware.run(rootSaga);

export const store = configureStore({
  reducer: rootReducer,
});
