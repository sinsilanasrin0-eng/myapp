import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import New from './components/New'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Routes>
      <Route path='/lgn'element={<Login/>}/>
      <Route path='/'element={<SignUp/>}/>
      <Route path='/state' element={<StateBasics/>}/>
      <Route path='/new'element={<New/>}/>
      <Route path='/api'element={<Api/>}/>
     </Routes>
       
      
     
    </>
  )
}

export default App
