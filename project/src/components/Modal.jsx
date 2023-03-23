import React from 'react'
import { useState } from 'react'

const Modal = ({ setOpenModal, title, textBtn, taskTitle, taskDesc, handleSentData }) => {
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const elements = form.elements
        const title = elements.title.value
        const description = elements.description.value
        handleSentData(title, description, setError)

    }

    return (
        <div className='bg-black/30 absolute inset-0 w-full h-full flex items-center justify-center'>
            <div className='bg-white z-50 relative w-max rounded-md p-4 shadow-lg flex flex-col items-center'>
                <div className="absolute cursor-pointer text-2xl right-2 top-2">
                    <ion-icon onClick={() => setOpenModal(false)} name="close-outline"></ion-icon>
                </div>
                <h2 className="font-semibold text-3xl mb-5">{title}</h2>
                <small className={`${error.length > 0 && "opacity-100"} duration-300 opacity-0 text-xs text-red-600 mb-5`}>{error}</small>
                <form onSubmit={handleSubmit} action="">
                    <input defaultValue={taskTitle} id="title" type="text" placeholder="Votre tâche ...." className="input text-sm input-bordered w-full mb-5" />
                    <textarea defaultValue={taskDesc} id="description" className="textarea textarea-bordered w-full" placeholder="Votre description ..."></textarea>
                    <button type='submit' className="bg-accent rounded-lg px-3 py-2 text-white w-full mt-5">{textBtn}</button>
                </form>
            </div>
        </div>
    )
}

export default Modal
