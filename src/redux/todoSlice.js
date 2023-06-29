import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'; // axios or your preferred HTTP client

const initialStateValue = { 
  todos: [],
};


export const getPostsAsync = createAsyncThunk(
  "todo/getPostsAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletePostsAsync = createAsyncThunk(
  "todo/deletePostsAsync",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialStateValue,
  reducers: {
    addTodo: (state, action) => {
      // state.value.push(action.payload) // Do not use this
      state.todos  = [action.payload,...state.todos]; // Use this instead
    },
    deleteTodo: (state, action) => {
      state.todos  = state.todos.filter((_, i) => i !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostsAsync.fulfilled, (state, action) => {
      console.log("내가 호출 되기는 했어");
      state.todos = action.payload.map((post) => post.title);
    })
    .addCase(deletePostsAsync.fulfilled, (state, action) => {
      console.log("삭제를 시도하기는 했어!");
      state.todos = state.todos.filter((todoId) => todoId !== action.meta.arg);
    });
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
