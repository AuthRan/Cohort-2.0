import { useState, memo } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("Not Defined")
  function updateTitle() {
    setTitle(Math.random())
  }
  return (
    <>
      <button onClick={updateTitle}>Change Name</button>
      <Header title={title} />
      <Header title={"Ashutosh"}/>
      <Header title={"Sourav"}/>
      <Header title={"Check"}/>
    </>
  )
}

// function Header({title}){
//   return (
//     <div>
//       <h3>Your name is {title}</h3>
//     </div>
//   )
// }

const Header = memo(function Header({title}){
  console.log("Rendering: ", title)
  return (
    <div>
      <h3>Your name is {title}</h3>
    </div>
  )
})

export default App
