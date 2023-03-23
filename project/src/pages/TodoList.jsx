import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Title from '../components/Title'
import Tasks from '../components/TodoList/Tasks'
import { useSelector } from 'react-redux'
import TaskDone from '../components/TodoList/TaskDone'
import Modal from '../components/Modal'
import { addTask, toggleTask } from '../redux/TodoListSlice'

const TodoList = () => {
    const tasks = useSelector(state => state.todo)
    const taskToDo = tasks.filter(t => t.state === false).reverse()
    const taskDone = tasks.filter(t => t.state === true)
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)


    const handleChange = (e, id) => {
        dispatch(toggleTask(id))
    };

    const handleSentData = (title, description, setError) => {
        title.length > 0 ?
            dispatch(addTask({ title, description })) & setOpenModal(false)
            : setError("Veuillez assigner un titre à votre tâche")
    }

    return (
        <div>
            <div className="flex w-full items-center justify-between pt-3">
                <Title text={"Liste des tâches"} />
            </div>
            <section className="mt-20 flex justify-between w-11/12 mx-auto ">
                <div className="w-5/12 p-4 rounded-md shadow-lg bg-white">
                    <div className="text-3xl relative ">
                        <h2 className='text-2xl text-center mb-10 font-semibold'>Tâches à faire ({taskToDo.length})</h2>
                        <div onClick={() => setOpenModal(true)} className="absolute top-0 cursor-pointer right-0">
                            <ion-icon name="add-outline"></ion-icon>
                        </div>
                    </div>
                    {taskToDo.length > 0 ?
                        taskToDo.map((task, item) => (
                            <Tasks key={item} task={task} handleChange={handleChange} />
                        ))
                        :
                        <p className="text-center">Toutes les tâches on été réalisées ...</p>}
                </div>
                <div className="border w-5/12 p-4 rounded-md shadow-lg bg-accent text-white">
                    <h2 className='text-2xl text-center mb-10 font-semibold'>Tâches faites ({taskDone.length})</h2>
                    {taskDone.length > 0 ?
                        taskDone.map((task, item) => (
                            <TaskDone key={item} task={task} handleChange={handleChange} />
                        ))
                        :
                        <p className="text-center">Aucune tâche de faite ... pour le moment</p>}
                </div>
            </section>
            {openModal &&
                <Modal setOpenModal={setOpenModal} title={" Ajouter une tâche"} textBtn={"Ajouter"} handleSentData={handleSentData} />
            }
        </div>
    )
}

export default TodoList