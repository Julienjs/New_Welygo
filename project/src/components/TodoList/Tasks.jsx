import React from 'react'
import { Link } from 'react-router-dom';

const Tasks = ({ task, handleChange }) => {

    return (
        <article className='p-4 bg-white active:scale-[0.99] active:shadow-inner duration-200 shadow-md rounded-lg mb-3 w-11/12 flex items-center mx-auto justify-between'>
            <Link to={`/todo/${task.id}`} className='cursor-pointer w-full h-max p-1'>
                <p>{task.title}</p>
            </Link>
            <label htmlFor={task.name}>
                <input name={task.name} type="checkbox" onChange={(e) => handleChange(e, task.id)} checked={task.state || false} className=" checkbox " />
            </label>
        </article>
    )
}

export default Tasks
