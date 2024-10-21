import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// lalyouts..
import App from './App.jsx'

// components..
import './index.css'
import SmallProj from './components/SmallProj.jsx'
import Deployed from './components/Deployed.jsx'
import QualificationLayout from './components/QualificationLayout.jsx'
import Educational from './components/Educational.jsx'
import WorkExp from './components/WorkExp.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
