import React from 'react'

const Tasks = ({ task }) => {
    return (
        <article className='p-4 rounded-lg mb-3 border w-1/2 flex items-center mx-auto justify-between'>
            <p>{task.title}</p>
        </article>
    )
}

export default Tasks
