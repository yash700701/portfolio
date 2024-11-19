import React from 'react'
import { motion } from 'framer-motion'
// import {fadeIn} from './Varients.js'
import c from './images/icons/C.png'
import cpp from './images/icons/C++.png'
import css3 from './images/icons/CSS3.png'
import figma from './images/icons/Figma.png'
import firebase from './images/icons/Firebase.png'
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
      <div id='icons' className='w-full pt-10 h-auto text-center dark:bg-black dark:text-white'>
        <h1 className='py-8 text-3xl font-bold' style={{fontFamily: 'Doto'}} >Technical Skills.</h1>
        <div className='grid sm:grid-cols-2'>
            <div className=''>
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}} 
                className='flex justify-evenly'>  
                  <img className='' src={html5} />
                  <img className='' src={js} />
                  <img className='' src={postman}  />
                  <img className='' src={react}  />
                </motion.div>
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}} 
                className='flex justify-evenly'>  
                 
                  <img className='' src={tailwind} />
                  <img className='' src={c} alt="" srcset="" />
                  <img src={cpp}/>
                </motion.div>
            </div>
            <div className=''>
                <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}} 
                className='flex justify-evenly'>  
                  <img src={figma}/>
                  <img src={git}/>
                  <img src={css3}/>
                  <img src={github}/>
                </motion.div>
                <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.7}} 
                className='flex justify-evenly'>  
                  <img src={redux}/>
                  <img src={appwrite}/>
                </motion.div>
            </div>
        </div>
      </div>
  )
}

export default Skills