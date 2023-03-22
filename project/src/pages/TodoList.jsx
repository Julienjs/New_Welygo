import React, { useState } from 'react'
import Title from '../components/Title'

const TodoList = () => {
    const tasks = useSelector(state => state.todo)
    const [addTask, setAddTask] = useState(false)
    return (
        <div>

        </div>
    )
}

export default TodoList
