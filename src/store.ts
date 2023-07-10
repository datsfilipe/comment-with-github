import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface Comment {
  id: number;
  name: string;
  text: string;
}

const commentsSlice = createSlice({
  name: "items",
  initialState: {
    data: [] as Comment[],
  },
  reducers: {
    setItems: (state, action) => {
      state.data = action.payload as Comment[];
    },
    addItem: (state, action) => {
      state.data.push(action.payload as Comment);
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setItems, addItem, removeItem } = commentsSlice.actions;

const store = configureStore({
  reducer: commentsSlice.reducer,
});

export default store;
