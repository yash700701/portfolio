import React from 'react'
import {Link, NavLink} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function  MyWork() {
  return (
    <div className='w-full pt-20 h-auto flex flex-col items-center text-center dark:bg-black'>
        <h1 className='my-10 text-3xl font-bold dark:text-white' >Find My Work.</h1>
        <div className='h-auto rounded-full bg-slate-300 '>
        <ul className='flex justify-evenly items-center'>
            <li>
                <NavLink 
                to="/smallprojects"
                className={({isActive})=>
                    `
                    ${isActive ? "text-black  bg-white dark:bg-black dark:text-white" : "text-black hover:bg-white dark:hover:bg-black dark:hover:text-white" }
                    transition-all
                    px-3
                    py-2
                    mx-2
                    rounded-full
                    text-xl
                    font-semibold
                    `
                }>
                    Small Projects.
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
                    ${isActive ? "text-black bg-white  dark:bg-black dark:text-white" : "text-black hover:bg-white  dark:hover:bg-black dark:hover:text-white" }
                    rounded-full
                    transition-all
                    px-5
                    py-2
                    mx-2
                    text-xl
                    font-semibold
                    
                    `
                }>
                    Deployed.
                </NavLink>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default  MyWork