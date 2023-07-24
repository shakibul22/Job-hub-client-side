import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Pages/SharedPages/Navbar'
import Footer from './Pages/SharedPages/Footer'

function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>    
    </>
  )
}

export default App
