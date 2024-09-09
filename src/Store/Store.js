import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Slice/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
