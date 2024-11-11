import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'



// lalyouts..
import MainLayout from '../MainLayout.jsx'
import QualificationLayout from './QualificationLayout.jsx'

// components..
import SmallProj from './SmallProj.jsx'
import Deployed from './Deployed.jsx'
import Educational from './Educational.jsx'
import WorkExp from './WorkExp.jsx'


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
  {
    path: 'qualification',
    element: <QualificationLayout/>,
    children: [
      {
        path: "educational",
        element: <Educational/>
      },{
        path: "workExperience",
        element: <WorkExp/>
      }
    ]
  }
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