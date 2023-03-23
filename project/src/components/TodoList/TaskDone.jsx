import React from 'react'
import { Link } from 'react-router-dom'

const TaskDone = ({ task, handleChange }) => {
    return (
        <article className='p-4 relative cursor-pointer rounded-lg active:scale-[0.99] active:shadow-inner duration-200 bg-white shadow-xl text-black mb-3 border w-11/12 flex items-center mx-auto justify-between'>
            <Link to={`/todo/${task.id}`} className='cursor-pointer w-full h-max p-1'>
                <p>{task.title}</p>
            </Link>
            <label htmlFor={task.name}>
                <input name={task.name} type="checkbox" onChange={(e) => handleChange(e, task.id)} checked={task.state || true} className=" checkbox " />
            </label>
            <div className="absolute w-[105%] h-[0.05rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800/70"></div>
        </article>
    )
}

export default TaskDone