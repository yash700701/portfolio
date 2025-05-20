import React from 'react'
import { useEffect, useState } from 'react';
import {Link, NavLink} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function  MyWork() {
    const [colorIndex, setColorIndex] = useState(0);

    const colors = ["darkgrey", "white"]; // Array of colors
  
    useEffect(() => {
      const interval = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Cycle through colors
      }, 1); // Change color every second
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
  return (
    <div className='px-2 pb-2 dark:bg-zinc-900'>
        <div className='w-full rounded-xl border-[2px] border-sky-700 bg-[#fffcf3] dark:shadow-white shadow-black shadow-sm h-auto flex flex-col items-center text-center dark:bg-black'>
        <h1 className='my-5 text-3xl font-bold dark:text-white'  style={{fontFamily: 'doto', color: colors[colorIndex]}}>Find My Work.</h1>
        <div className='h-auto my-5 border-[2px] border-sky-700 dark:bg-black rounded-xl bg-white dark:shadow-white shadow-black shadow-sm '>
        <ul className='flex justify-evenly items-center'>
            <li>
                <NavLink 
                to="/smallprojects"
                className={({isActive})=>
                    `
                    ${isActive ? "text-sky-700" : "dark:text-zinc-500" }
                    transition-all
                    px-4
                    py-2
                    mx-2
                    rounded-full
                    text-sm
                    sm:text-lg
                    font-semibold
                    `
                }>
                    Minor Projects.
                </NavLink>
            </li>
           
            <li 
             style={{
                display: "flex",       
                justifyContent: "center",
                alignItems: "center",    
                height: "55px",
                    
              }}>
                <NavLink 
                to="/largeprojects"
                className={({isActive})=>
                    `
                    ${isActive ? "text-sky-700" : "dark:text-zinc-500"  }
                    rounded-full
                    transition-all
                    px-4
                    py-2
                    mx-2
                    text-sm
                    sm:text-lg
                    font-semibold
                    
                    `
                }>
                    Major Projects.
                </NavLink>
            </li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default  MyWork