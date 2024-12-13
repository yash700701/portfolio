import React from 'react'
import { motion } from 'framer-motion'
// import {fadeIn} from './Varients.js'
import c from './images/icons/C.png'
import cpp from './images/icons/C++.png'
import css3 from './images/icons/CSS3.png'
import figma from './images/icons/Figma.png'
import git from './images/icons/Git.png'
import github from './images/icons/GitHub.png'
import html5 from './images/icons/HTML5.png'
import js from './images/icons/JavaScript.png'
import mongo from './images/icons/MongoDB.png'
import node from './images/icons/Node.js.png'
import postman from './images/icons/Postman.png'
import react from './images/icons/React.png'
import tailwind from './images/icons/Tailwind.png'
import appwrite from './images/icons/appwrite.png'
import redux from './images/icons/Redux.png'
import { div } from 'framer-motion/client'

const skills = [
  {
    skill: "HTML",
    img: html5
  },
  {
    skill: "C++",
    img: cpp
  },
  {
    skill: "CSS",
    img: css3
  },
  {
    skill: "Figma",
    img: figma
  },
  {
    skill: "Git",
    img: git
  },
  {
    skill: "Github",
    img: github
  },
  {
    skill: "C language",
    img: c
  },
  {
    skill: "JavaScript",
    img: js
  },
  {
    skill: "MongoDB",
    img: mongo
  },
  {
    skill: "Node Js",
    img: node
  },
  {
    skill: "Postman API",
    img: postman
  },
  {
    skill: "React",
    img: react
  },
  {
    skill: "Tailwind",
    img: tailwind
  },
  {
    skill: "Appwrite",
    img: appwrite
  },
  {
    skill: "Redux Toolkit",
    img: redux
  },
 
]


const fadeIn = (direction, delay) => {
    return{
        hidden:{
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show:{
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}


function Skills() {
  return (
     <div className='px-2 py-4 dark:bg-black'>
       <div className='w-full border-[1px] rounded-xl dark:border-white border-black py-5 h-auto text-center dark:bg-black dark:text-white'>
        <h1 className=' text-3xl font-bold dark:text-zinc-300' style={{fontFamily: 'Doto'}} >Technical Skills.</h1>
      <div className='grid grid-cols-3  sm:grid-cols-8 gap-2 p-5'>
      {skills.map((skill)=>(
            <div className='rounded-lg border-[1px] dark:border-white border-black flex' key={skill.skill}>
                {/* <img src={skill.img} className='mx-auto bg-black' alt="" /> */}
                <h1 className='mx-auto text-sm p-1 text-'>{skill.skill}</h1>
            </div>
        ))}
      </div>
      </div>
     </div>
  )
}

export default Skills