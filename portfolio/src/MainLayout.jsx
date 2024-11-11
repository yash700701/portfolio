//router
import { Outlet } from 'react-router-dom'
//components
import Home from './components/home.jsx'
import Headder from './components/headder.jsx'
import Skills from './components/Skills.jsx'
import MyWork from './components/MyWork.jsx'
import Footer from './components/Footer.jsx'

function MainLayout() {

  return (
    <>
    <Headder/>
    <Home/>
    <Skills/>
    <MyWork/>
       <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout
