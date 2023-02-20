import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add_todo: (state, action) => {
      state.todos.push(action.payload);
    },

    delete_all: () => {
      return initialState;
    },

    completed: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);

      todo.completed = !todo.completed;
    },

    edit: (state, action) => {
      console.log(action.payload);
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.title = action.payload.title;
    },

    delete: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;

