import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleTask } from '../../redux/TodoListSlice';

const Tasks = ({ task }) => {
    const [checked, setChecked] = useState(null)
    const dispatch = useDispatch()

    const handleChange = (e, id) => {
        setChecked(e.target.checked)
        dispatch(toggleTask(id))
    };

    return (
        <article className='p-4  shadow-md rounded-lg mb-3 w-11/12 flex items-center mx-auto justify-between'>
            <Link to={`/todo/${task.id}`} className='cursor-pointer w-full h-max p-1'>
                <p>{task.title}</p>
            </Link>
            <label htmlFor={task.name}>
                <input name={task.name} type="checkbox" onChange={(e) => handleChange(e, task.id)} checked={checked} className=" checkbox " />
            </label>
        </article>
    )
}

export default Tasks
