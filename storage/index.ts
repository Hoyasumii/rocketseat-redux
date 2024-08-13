import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const todoSlice = createSlice({
  name: "todo",
  initialState: [] as Array<string>,
  reducers: {
    add(state, action: { type: string; payload: string }) {
      state.push(action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export type Store = ReturnType<typeof store.getState>;
export type TodoActionsSlice = typeof todoSlice.actions;

export const TodoActions = todoSlice.actions;
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;