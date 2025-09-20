
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route,Routes } from 'react-router-dom'
function App() {

  return (
    <Routes>
     <Route  path='/login' element={<Login/>}/>
     <Route  path='/signup' element={<Signup/>}/>
     <Route path="*" element={<Login />} /> {/* fallback */}
    </Routes>
  )
}

export default App
