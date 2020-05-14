import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "../reducers";
// Note that this import/export is the best way for combineReducers

// The most common use case for middleware is to support asynchronous
// actions without much boilerplate code. It does so by letting you
// dispatch async actions in addition to normal actions

// For example, redux-thunk lets the action creators invert control
// by dispatching functions. They would receive dispatch as an argument
// and may call it asynchronously. Such functions are called thunks.
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware) // let is dipatch() functions
);

export default store;
