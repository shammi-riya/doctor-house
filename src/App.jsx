
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './Pages/Shared/Navber'

function App() {
 

  return (
    <>
    <Navber></Navber>
    <Outlet></Outlet>
       
     
    </>
  )
}

export default App
