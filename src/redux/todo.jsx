import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialStateValue = {
  todos: [],
};

export const getPostsAsync = createAsyncThunk(
  "todo/getPostsAsync",
  async (param, { rejectWithValue }) => {
    try {
      const response = await api.getUserStores(param);
      const { results } = response.data;
      return results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState: { value: initialStateValue },
  reducers: {
    addTodo: (state, action) => {
      // state.value.push(action.payload) // Do not use this
      state.value = [...state.value, action.payload]; // Use this instead
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((_, i) => i !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
