import TodoList from '../pages/TodoList'
import DetailTodo from '../pages/DetailTodo'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="w-11/12 mx-auto">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<DetailTodo />} />
      </Routes>
    </div>
  )
}

export default App
