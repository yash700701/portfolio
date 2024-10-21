// use as layout


import { useState, useEffect } from 'react'
import './App.css'
// context
import { ThemeProvider } from './components/UserContext.js'
//router
import { Outlet } from 'react-router-dom'
//components
import Home from './components/home.jsx'
import Headder from './components/headder.jsx'
import Skills from './components/Skills.jsx'
import MyWork from './components/MyWork.jsx'
import Footer from './components/Footer.jsx'
import Qualifications from './components/Qualifications.jsx'



function App() {
  //darkMode
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])


  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme} }>
    <Headder/>
    <Home/>
    <Skills/>
    <MyWork/>
       <Outlet/>
    <Footer/>
    </ThemeProvider>
  )
}

export default App
