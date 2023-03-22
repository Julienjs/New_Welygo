import React, { useState } from 'react'

const Addtask = ({ setAddTask }) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    return (
        <div className='bg-black/30 absolute inset-0 w-full h-full flex items-center justify-center'>
            <div className="bg-white w-1/2 rounded-lg flex flex-col items-center h-max p-5">
                <input onChange={(e) => setTitle(e.target.value)} placeholder='Titre' type="text" className="px-4 border rounded-lg w-1/2 mt" />
                <input onChange={(e) => setDesc(e.target.value)} placeholder='Description' type="text" className="px-4 border rounded-lg w-1/2" />
                <button onClick={() => setAddTask(false)}>Fermer</button>
            </div>

        </div>
    )
}

export default Addtask
