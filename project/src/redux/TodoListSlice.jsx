import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit"
import Data from '../data/Todo.json'

const TodoSlice = createSlice({
    name: "todo",
    initialState: Data,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Math.random(),
                state: false,
                title: action.payload,
            }
            state.push(newTask)
        },
        toggleTask: (state, action) => {
            const task = state.find(t => t.id === action.payload);
            task.state = !task.state
        },

    }
})

export const store = configureStore({
    reducer: {
        todo: TodoSlice.reducer
    }
})
