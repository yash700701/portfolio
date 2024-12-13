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
  
   <div id='headerContainer' className='flex px-2 pt-3 dark:bg-black justify-center bg-white '>
      <div 
      className='w-[100%] h-16 z-50 border-[1px] dark:border-white border-black rounded-xl flex justify-between '>
        <h1 className='px-5 py-5  font-extrabold text-[indianred] font-[doto] text-base sm:text-xl'>
          portfolio.yash
        </h1>
        <ul className='flex'>
            <li className='mt-6 mr-4 '  style={{fontSize: "0.7rem" , marginLeft: "1rem"}}>
                <DarkModeSwitch
                    style={{ marginBottom: '2rem' }}
                    checked={isDarkMode}
                    onChange={onChngBtn}
                    className='dark:text-white'
                    size={20}
                />
            </li>
        </ul>     
      </div>
   </div>
  
  )
}

export default Headder