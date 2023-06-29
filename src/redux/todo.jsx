import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = []

export const todoSlice = createSlice({
    name: "todo",
    initialState: { value: initialStateValue },
    reducers: {
        addTodo: (state, action) => {
            // state.value.push(action.payload) // Do not use this
            state.value = [...state.value, action.payload] // Use this instead
        },
        deleteTodo: (state, action) => {
            state.value = state.value.filter((_, i) => i !== action.payload)
        }
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;