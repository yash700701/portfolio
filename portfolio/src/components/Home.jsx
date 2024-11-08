import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import {useTypewriter , curser} from 'react-simple-typewriter'
import yash from './images/yash.jpg'
import { ThemeProvider } from './UserContext'


function Home() {
 
  const [text] = useTypewriter({
    words : ['Web Devlopment.', 'Design.'],
    loop : {},
  })

  const [para, setPara] = useState("I\'am undergraduate student from JSS Noida, Currently doing Btech in Computer Science.")
  useEffect(() => {
    const paras = ['Yash is also an instructor at a leading YC EdTech platform',
                   'having taught MERN Stack to over 100,000+ students.',
                   'Yash also has interests in Algo Trading, UI Designing and Product Designing.',
                   "I\'am undergraduate student from JSS Noida, Currently doing Btech in Computer Science."
                  ];
    let index = 0;
      setInterval(() => {
      index = (index + 1) % paras.length; 
      setPara(paras[index]);
    }, 3000); 

  }, []);

  return (
   
   <div className='dark:bg-black'>
     <motion.div id='homeContainer' className='dark:bg-black'  
    initial={{opacity:0, y:10}}
    animate={{opacity:1, y:0}}
    transition={{
      duration:1,
    }} >
      <div className='grid sm:grid-cols-10 grid-cols-1'>
        <div className='h-60 sm:col-span-5 mx-2 my-2 flex  rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 '>
          <div className='my-20 ml-5'>
          <h1 className='text-3xl py-1 font-bold'>Hi There,</h1>
          <h1 className='text-3xl font-bold'>I'm <span className='text-neutral-50 text-5xl'>Yash Tiwari</span></h1>
          <h1 className='text-xl py-1 font-semibold'>I'm Into <span className='text-3xl text-sky-950 ' style={{fontFamily: 'Playfair Display'}}>{text}</span></h1>
          </div>
        </div>
       
        <div className=' sm:col-span-5 flex '>
          <div className=' h-60 max-w-[50vh] mx-2 my-2  rounded-xl ' style={{backgroundColor:"rgb(217,217,217)"}}>
            <img className='h-60 rounded-xl w-60 object-cover'  src={yash} alt="profile-pic" />
          </div>

          <div className='h-60 mx-2 my-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-700 w-4/5'>
          <h1 className='text-white text-xl  p-4' style={{fontFamily:'Ubuntu'}}>Some Of My <span style={{fontFamily:"Playfair Display", color:"indianred"}}>Interesting Stats</span></h1>
          </div>
        </div>
      </div>
      
      <div className=''>
        <div className='mx-2 mt-2 rounded-xl bg-gradient-to-r from-green-200 to-emerald-600' >
          <p className='text-left pl-5 pt-4 text-lg font-semibold'>About Me.</p>
          <motion.p
          className='text-base font-semibold p-5 text-slate-800'
          // style={{fontFamily:"Playfair Display"}}
          initial={{opacity:0, y:5}}
          animate={{opacity:1, y:0}}
          transition={{
            duration:1,
          }}
          >
          {/* {para} */}
          <p>
          Hello! I’m Yash Tiwari, a passionate front-end developer based in Noida. I specialize in crafting visually appealing and highly interactive websites using technologies like HTML, CSS, JavaScript, and modern frameworks such as React. I have honed my skills in building responsive and user-friendly interfaces that prioritize both aesthetics and functionality.

I’ve worked on diverse projects ranging from simple landing pages to complex web applications. I’m driven by a desire to create intuitive and seamless digital experiences that delight users and fulfill client goals.

In addition to my technical skills, I am committed to continuous learning and staying up-to-date with the latest industry trends. I’m adept at collaborating with teams, understanding user needs, and translating ideas into pixel-perfect, performant code.

Feel free to explore my portfolio and get in touch if you’re looking for a developer who can bring your ideas to life or simply want to connect!
          </p>
          </motion.p>
        </div>
        
      </div>

    </motion.div>
    <div className='mt-4 ml-2 dark:text-white'>
      <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg hover:text-black'>Download Resume</button>
    
    
    </div>
   </div>
    
  )
}

export default Home