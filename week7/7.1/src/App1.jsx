import './App.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing =  React.lazy(() => import('./components/Landing'))
function App() {
  return (
    <>
     <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path='/dashboard'suspense element={<Dashboard />} />
        <Route path='/' element={<Landing />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

function AppBar() {
  const navigate = useNavigate()
  return <div>
    <button onClick={() => {
      navigate("/dashboard")
    }}>
      Dashboard
    </button>
    <button onClick={() => {
      navigate("/")
    }}>
      Landing
    </button>
  </div>
}

export default App
