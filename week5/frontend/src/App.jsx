import { useState } from 'react'
import './App.css'
import {CreateTodo} from './components/CreateTodo.jsx'
import {Todos} from './components/Todos.jsx'
function App() {
  const [todos, setTodos] = useState([])

  // This is ugly way of doing it the better approach is using useEffect hook.
  fetch("http://localhost:3000/todos")
  .then(async function(res) {
    const json = await res.json()
    setTodos(json.todos)
  })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos}/>
    </div>
  )
}

export default App
