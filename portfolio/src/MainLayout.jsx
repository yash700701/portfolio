//router
import { Outlet } from 'react-router-dom'
//components
import Home from './components/Home.jsx'
import Headder from './components/Headder.jsx'
import Skills from './components/Skills.jsx'
import MyWork from './components/MyWork.jsx'
import Footer from './components/Footer.jsx'
import Swipe from './components/Swipe.jsx'
import Mail from './components/Mail.jsx'

function MainLayout() {

  return (
    <>
    <Headder/>
    <Home/>
    <Skills/>
    <MyWork/>
       <Outlet/>
    <Swipe/> 
    <Mail/> 
    <Footer/>
    </>
  )
}

export default MainLayout
