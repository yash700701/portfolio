import { div } from 'framer-motion/client'
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function  MyWork() {
  return (
    <div className='px-2  dark:bg-black'>
        <div className='w-full rounded-xl border-[1px] dark:border-white border-black h-auto flex flex-col items-center text-center dark:bg-black'>
        <h1 className='my-5 text-3xl font-bold dark:text-white'  style={{fontFamily: 'doto'}}>Find My Work.</h1>
        <div className='h-auto my-5 rounded-full border-[1px] dark:border-white border-black '>
        <ul className='flex justify-evenly items-center'>
            <li>
                <NavLink 
                to="/smallprojects"
                className={({isActive})=>
                    `
                    ${isActive ? "text-sky-700" : "dark:text-white" }
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
                    ${isActive ? "text-sky-700" : "dark:text-white"  }
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