import React from 'react'

const Tasks = ({ task }) => {
    return (
        <article className='p-4 rounded-lg border w-1/2 flex items-center mx-auto justify-between'>
            <p>{task.text}</p>
            <p>{task.description}</p>
            <input type="checkbox" checked="checked" className="checkbox" />

        </article>
    )
}

export default Tasks
