import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit"
import Data from '../data/Todo.json'

const TodoSlice = createSlice({
    name: "todo",
    initialState: Data,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: "",
                done: false,
                text: action.payload,
                description: action.payload,
            }
            state.push(newTask)
        },
        toggleTask: (state, action) => {
            const task = state.find(t => t.id === action.payload);
            task.done = !task.done
        },

    }
})

export const store = configureStore({
    reducer: {
        todo: TodoSlice.reducer
    }
})
