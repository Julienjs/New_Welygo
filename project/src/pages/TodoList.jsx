import React, { useState } from 'react'
import Title from '../components/Title'
import Tasks from '../components/TodoList/Tasks'
import { useSelector } from 'react-redux'
import TaskDone from '../components/TodoList/TaskDone'

const TodoList = () => {
    const tasks = useSelector(state => state.todo)
    const taskToDo = tasks.filter(t => t.state === false)
    const taskDone = tasks.filter(t => t.state === true)

    return (
        <div>
            <div className="flex w-full items-center justify-between mt-3">
                <Title text={"Liste des tâches"} />
            </div>
            <section className="mt-20 flex justify-between w-11/12 mx-auto">
                <div className="w-5/12 p-4 rounded-md shadow-lg">
                    <h2 className='text-2xl text-center mb-10 font-semibold'>Taches à faire ({taskToDo.length})</h2>
                    {taskToDo.length > 0 ?
                        taskToDo.map((task, item) => (
                            <Tasks key={item} task={task} />
                        ))
                        :
                        <p className="text-center">Toutes les taches on été réalisées ...</p>}
                </div>
                <div className="border w-5/12 p-4 rounded-md shadow-lg bg-accent text-white">
                    <h2 className='text-2xl text-center mb-10 font-semibold'>Taches faites ({taskDone.length})</h2>
                    {taskDone.length > 0 ?
                        taskDone.map((task, item) => (
                            <TaskDone key={item} task={task} />
                        ))
                        :
                        <p className="text-center">Aucune tache de faite ... pour le moment</p>}

                </div>
            </section>
        </div>
    )
}

export default TodoList
