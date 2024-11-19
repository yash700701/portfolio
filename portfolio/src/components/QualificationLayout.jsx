import React from 'react'
import { Outlet } from 'react-router-dom'
import Headder from './Headder'
import Qualifications from './Qualifications'
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