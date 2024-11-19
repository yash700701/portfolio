import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useTheme from './UserContext'
import { DarkModeSwitch } from 'react-toggle-dark-mode';



function Headder() {
 
  //darkModeToggler
  const {themeMode, darkTheme, lightTheme} = useTheme()
  const [isDarkMode, setDarkMode] = useState(true);

  const onChngBtn = (e)=>{
    // const darkModeStatus = e.currentTarget.checked
    if(isDarkMode){
      lightTheme()
      setDarkMode(false)
    }else{
      darkTheme()
      setDarkMode(true)
    }
  }

  return (
  
   <div id='headerContainer' className='flex justify-center dark:bg-black '>
      <div 
      className='w-[100%] top-0 fixed h-16 z-50 bg-gradient-to-tl from-[rgba(0,0,0,0.8)] from-10% via-[rgba(30,30,30,0.8)] via-30% to-[rgba(0,0,0,0.8)] to-90% backdrop-blur-[4px] flex justify-between '>
        <h1 className='px-5 py-5  font-extrabold text-[indianred]' style={{fontSize: "1rem", fontFamily: "Doto"}}>
          portfolio.yash
        </h1>
        <ul className='flex'>
        <li className='mt-6 mx-1' style={{fontSize: "0.7rem"}}>
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
            <li className='mt-6 mx-1' style={{fontSize: "0.7rem"}}>
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
                <DarkModeSwitch
                    style={{ marginBottom: '2rem' }}
                    checked={isDarkMode}
                    onChange={onChngBtn}
                    className='text-white'
                    size={20}
                />
            </li>
        </ul>     
      </div>
   </div>
  
  )
}

export default Headder