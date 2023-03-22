import React, { useState } from 'react'
import Title from '../components/Title'
import Tasks from '../components/TodoList/Tasks'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const tasks = useSelector(state => state.todo)
    return (
        <div>
            <div className="flex w-full items-center justify-between mt-3">
                <Title text={"Liste des tâches"} />
            </div>
            <section className="mt-20"></section>
            {tasks.map((task, item) => (
                <Tasks key={item} task={task} />
            ))}
        </div>
    )
}

export default TodoList
