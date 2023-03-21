import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit"

const TodoSlice = createSlice({

    name: "todo",
    initialState: [

        { id: 1, text: 'Faire la cuisine', description: 'Faire cuire le poulet à basse température', done: false }
    ],
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
