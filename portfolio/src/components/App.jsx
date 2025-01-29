import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'



// lalyouts..
import MainLayout from '../MainLayout.jsx'


// components..
import SmallProj from './SmallProj.jsx'
import Deployed from './Deployed.jsx'



const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: "smallprojects",
        element: <SmallProj/>
      },
      {
        path: "largeprojects",
        element: <Deployed/>
      },
    ]
  },
])

import { ThemeProvider } from './UserContext.js'
import { useState, useEffect } from 'react'
  
function App() {


  //darkMode
const [themeMode, setThemeMode] = useState("dark")
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
      <RouterProvider router={Router}/>
  </ThemeProvider>    
  )
}

export default App