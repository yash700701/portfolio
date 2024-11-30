import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Qualifications() {
  return (
    <div className='w-full pt-[160px] h-auto flex flex-col items-center text-center dark:bg-black'>
    <h1 className='my-10 text-3xl font-bold dark:text-white'  style={{fontFamily: 'Doto'}} >Qualifications.</h1>
    <div className=' h-auto rounded-full bg-slate-300 '>
    <ul className='flex justify-evenly items-center'>
        <li>
            <NavLink 
            to="educational"
            className={({isActive})=>
                `
                ${isActive ? "text-black  bg-white dark:bg-black dark:text-white" : "text-black hover:bg-white dark:hover:bg-black dark:hover:text-white" }
                transition-all
                px-3
                py-2
                mx-2
                rounded-full
                text-sm
                sm:text-lg
                font-semibold
                `
            }>
                educational.
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
            to="workExperience"
            className={({isActive})=>
                `
                ${isActive ? "text-black bg-white  dark:bg-black dark:text-white" : "text-black hover:bg-white  dark:hover:bg-black dark:hover:text-white" }
                rounded-full
                transition-all
                px-3
                py-2
                mx-2
                text-sm
                sm:text-lg
                font-semibold
                
                `
            }>
                workExperience.
            </NavLink>
        </li>
    </ul>
    </div>
</div>
  )
}

export default Qualifications