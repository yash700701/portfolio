import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useTheme from './UserContext'


function Headder() {
 
  //darkModeToggler
  const {themeMode, darkTheme, lightTheme} = useTheme()
  const onChngBtn = (e)=>{
    const darkModeStatus = e.currentTarget.checked
    if(darkModeStatus){
      darkTheme()
    }else{
      lightTheme()
    }
  }

  return (
  
   <div id='headerContainer' className='flex justify-center dark:bg-black '>
      <div 
      className='w-full border-2 h-16 mx-2 my-2 rounded-xl bg-slate-900 flex justify-between  dark:border-2 '>
        <h1 className='px-5 py-5  text-slate-300 font-extrabold' style={{fontSize: "1rem"}}>
          portfolio.yash
        </h1>
        <ul className='flex'>
        <li className='mt-6 mx-2' style={{fontSize: "0.7rem"}}>
            <NavLink 
                to="/"
                className={({isActive})=>
                    `
                    ${isActive ? "text-black  bg-white" : "text-white " }
                    transition-all
                    hover:bg-white
                    hover:text-black
                    px-2
                    py-1
                    rounded-full
                    font-semibold
                    `
                }>
                    Home.
                </NavLink>
            </li>
            <li className='mt-6 mx-2' style={{fontSize: "0.7rem"}}>
            <NavLink 
                to="/qualification"
                className={({isActive})=>
                    `
                    ${isActive ? "text-black  bg-white" : "text-white " }
                    transition-all
                    hover:bg-white
                    hover:text-black
                    px-2
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    `
                }>
                    Qualification.
                </NavLink>
            </li>
             
            <li className='mt-6 mr-4 '  style={{fontSize: "0.7rem" , marginLeft: "1rem"}}>
              <span className='text-white text-xs font-semibold '>dark </span>
              <input type="checkbox" value="" className=' bg-black' onChange={onChngBtn} checked={themeMode==="dark"}/>
            </li>
        
        </ul>
        
      </div>
   </div>
  
  )
}

export default Headder