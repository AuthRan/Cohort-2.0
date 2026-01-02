import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo} from './components/CreateTodo.jsx'
import {Todos} from './components/Todos.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateTodo />
      <Todos />
    </div>
  )
}

export default App
