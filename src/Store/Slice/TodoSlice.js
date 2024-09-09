import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  initialState: [],
  name: "todo",

  reducers: {
    addTodo: (state, action) => {
      state.push(action?.payload);
    },

    removeTodo: (state, action) => {
      return state.filter((e) => e?.id !== action?.payload);
    },

    updateTodo: (state, action) => {
      return state.map((e) => {
        if (e?.id === action?.payload?.id) {
          return {
            ...e,
            name: action?.payload?.name,
          };
        } else {
          return e;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
