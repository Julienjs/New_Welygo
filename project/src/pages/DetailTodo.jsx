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
                <Link to={'/'} className="text-2xl"><ion-icon name="arrow-back-outline"></ion-icon></Link>
            </div>
            {task.map((t) => (
                <div key={t.id} className="mt-20 pb-10">
                    <h1 className="text-2xl text-center text-black font-semibold mb-3">{t.title}</h1>
                    <div className={`${t.state ? "bg-accent text-white" : "bg-white"} flex max-h-max flex-col rounded-lg p-10 shadow-xl`}>
                        <p className="text-2xl font-semibold mb-5">Description :</p>
                        <p className="mt-2 text-xl">{t.description}</p>
                    </div>
                    {openModal &&
                        <Modal setOpenModal={setOpenModal} title={"Modifier la tâche"} textBtn={"Modifier"} taskTitle={t.title} taskDesc={t.description} handleSentData={handleSentData} />
                    }
                    <div className="flex items-center justify-center mt-5">
                        <Link to={`${t.id > 1 || t.id === tasks.length ? `/todo/${t.id - 1}` : `/todo/${t.id}`}`} className={`${t.id === 1 ? "text-info/50" : "text-info"} text-4xl  flex items-center justify-center`}>
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </Link>
                        <p className="mx-5 font-semibold">{t.id} / {tasks.length}</p>
                        <Link to={`${t.id < tasks.length ? `/todo/${t.id + 1}` : `/todo/${t.id}`}`} className={`${t.id === tasks.length ? "text-info/50" : "text-info"} text-4xl  flex items-center justify-center`}>
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default DetailTodo
