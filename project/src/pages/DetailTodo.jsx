import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Title from '../components/Title'


const DetailTodo = () => {
    const tasks = useSelector(state => state.todo)
    const { id } = useParams()
    const task = tasks.filter(t => t.id === Number(id))

    return (
        <div>
            <div className="flex justify-between items-center">
                <Title text={"Tache"} />
                <Link to={-1}>Précedent</Link>
            </div>
            {task.map((t) => (
                <div key={t.id} className="mt-10">
                    <h1 className="text-2xl text-center">{t.title}</h1>
                    <div className="flex flex-col">
                        <p className="text-xl">Description :</p>
                        <p className="mt-2">{t.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DetailTodo
