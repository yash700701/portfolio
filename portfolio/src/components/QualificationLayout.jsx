import React from 'react'
import { Outlet } from 'react-router-dom'
import Headder from './headder'
import Home from './home'
import Skills from './Skills'
import Qualifications from './Qualifications'
import MyWork from './MyWork'
import Footer from './Footer'

function QualificationLayout() {

    
  return (
   <>
   <Headder/>
   <Qualifications/>
     <Outlet/>
   <Footer/>  

   </>
  )
}

export default QualificationLayout