import React from 'react'

const TaskDone = ({ task }) => {
    return (
        <article className='p-4 relative rounded-lg bg-white shadow-lg text-black mb-3 border w-11/12 flex items-center mx-auto justify-between'>
            <p>{task.title}</p>
            <label htmlFor={task.name}>
                <input name={task.name} type="checkbox" checked={task.state} className="checkbox checkbox-accent" />
            </label>
            <div className="absolute w-[105%] h-[0.05rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800/70"></div>
        </article>
    )
}

export default TaskDone