import { createSlice, configureStore } from "@reduxjs/toolkit"
import Data from '../data/Todo.json'


const TodoSlice = createSlice({
    name: "todo",
    initialState: Data,
    reducers: {
        addTask: (state = initialState, { payload }) => {

            const newTask = {
                id: state[state.length - 1].id + 1,
                state: false,
                title: payload.title,
                description: payload.description
            }
            state.push(newTask)
        },
        toggleTask: (state, { payload }) => {
            const task = state.find(t => t.id === payload);
            console.log("toggle", task.state);
            task.state = !task.state
        },
        updateTask: (state, { payload }) => {
            const task = state.find(t => t.id === Number(payload.id))
            task.title = payload.title
            task.description = payload.description
        },
    }
})
export const { addTask, toggleTask, updateTask } = TodoSlice.actions

export const store = configureStore({
    reducer: {
        todo: TodoSlice.reducer
    }
})
