import React from 'react'
import Title from '../components/Title'
import { useSelector } from 'react-redux'
import Tasks from '../components/TodoList/Tasks'

const TodoList = () => {
    const tasks = useSelector(state => state.todo)
    return (
        <div>
            <Title text={"Liste des tâches"} />
            <section className="mt-20"></section>
            {tasks.map((task) => (
                <Tasks key={task.id} task={task} />
            ))}

        </div>
    )
}

export default TodoList
