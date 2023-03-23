import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../components/Title'
import Modal from '../components/Modal'
import { updateTask } from '../redux/TodoListSlice'


const DetailTodo = () => {
    const tasks = useSelector(state => state.todo)
    const { id } = useParams()
    const dispatch = useDispatch()
    const task = tasks.filter(t => t.id === Number(id))
    const [openModal, setOpenModal] = useState(false)

    const handleSentData = (title, description, setError) => {
        title.length > 0 ?
            dispatch(updateTask({ id, description, title })) & setOpenModal(false)
            : setError("Veuillez assigner un titre à votre tâche")
    }


    return (
        <div>
            <div className="flex flex-row-reverse justify-between items-center mt-3">
                <button onClick={() => setOpenModal(true)} className='rounded-lg shadow-md bg-info text-white px-4 py-2 active:scale-[0.99] active:shadow-inner duration-150'>Modifier</button>
                <Title text={"Tâche"} />
                <Link to={-1} className="text-2xl"><ion-icon name="chevron-back-outline"></ion-icon></Link>
            </div>
            {task.map((t) => (
                <div key={t.id} className="mt-20">
                    <h1 className="text-2xl text-center text-black font-semibold">{t.title}</h1>
                    <div className={`${t.state ? "bg-accent text-white" : "bg-white"} flex h-96 flex-col rounded-lg p-10 shadow-xl`}>
                        <p className="text-2xl font-semibold mb-5">Description :</p>
                        <p className="mt-2 text-xl">{t.description}</p>
                    </div>
                    {openModal &&
                        <Modal setOpenModal={setOpenModal} title={"Modifier la tâche"} textBtn={"Modifier"} taskTitle={t.title} taskDesc={t.description} handleSentData={handleSentData} />
                    }
                </div>
            ))}

        </div>
    )
}

export default DetailTodo
