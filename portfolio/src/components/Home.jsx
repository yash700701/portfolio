import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import design from './images/Design.png'
import {motion} from 'framer-motion'
import {useTypewriter , curser} from 'react-simple-typewriter'
import yash from './images/yash.jpg'
import { ThemeProvider } from './UserContext'




function Home() {
 


   
  const [text] = useTypewriter({
    words : ['Web Devlopment.', 'Design.'],
    loop : {},
  })

  const [para, setPara] = useState("Yash also has interests in Algo Trading, UI Designing and Product Designing.")
  useEffect(() => {
    const paras = ['Yash is also an instructor at a leading YC EdTech platform',
                   'having taught MERN Stack to over 100,000+ students.',
                   'Yash also has interests in Algo Trading, UI Designing and Product Designing.',
                   'Yash is a undergraduate student from JSS Noida and has doing his Btech in Computer Science.'
                  ];
    let index = 0;
      setInterval(() => {
      index = (index + 1) % paras.length; 
      setPara(paras[index]);
    }, 3000); 

  }, []);

  return (
   
    <motion.div id='homeContainer' className='dark:bg-black'  
    initial={{opacity:0, y:10}}
    animate={{opacity:1, y:0}}
    transition={{
      duration:1,
    }} >
      <div className='grid sm:grid-cols-10 grid-cols-1'>

        <div className='h-64 sm:col-span-5 mx-2 my-2 flex  rounded-xl  ' style={{ backgroundColor : "rgba(60,110,113)"}}>
          <div className='my-24 ml-5 w-72'>
          <h1 className='text-3xl py-1 font-bold'>Hi There,</h1>
          <h1 className='text-3xl font-bold'>I'm <span className='text-white text-4xl'>Yash Tiwari</span></h1>
          <h1 className='text-xl py-1 font-semibold'>I'm Into <span className='text-xl text-sky-300 ' style={{fontFamily: 'Playfair Display'}}>{text}</span></h1>
          </div>
          <div  id='design'> 
            <img className='h-36  pr-2 rounded-xl' src={design} alt="" />
          </div>
        </div>
       
        <div className=' sm:col-span-5 flex '>
          <div className=' h-64 w-[50vh] mx-2 my-2  rounded-xl ' style={{backgroundColor:"rgb(217,217,217)"}}>
            <img className='h-64 rounded-xl w-60'  src={yash} alt="" />
          </div>

          <div className='h-64 mx-2 my-2 rounded-xl' style={{backgroundColor:"rgb(53,53,53)", width:"80%"}}>
          <h1 className='text-white text-xl  p-4' style={{fontFamily:'Ubuntu'}}>Some Of My <span style={{fontFamily:"Playfair Display", color:"indianred"}}>Interesting Stats</span></h1>
          </div>
        </div>
      </div>
      
      <div className=''>
        <div className='mx-2 mt-2 h-48 rounded-xl py-5' style={{backgroundColor:'rgb(164, 195, 178)'}}>
          <p className='text-left pl-5 text-lg font-semibold'>About Me.</p>
          <motion.p
          className='text-xl font-semibold p-5 text-slate-800'
          // style={{fontFamily:"Playfair Display"}}
          initial={{opacity:0, y:5}}
          animate={{opacity:1, y:0}}
          transition={{
            duration:1,
          }}
          >
          {para}
          </motion.p>
        </div>
        
        {/* <div className='w-1/3 h-14 mx-3 my-3 mr-5 rounded-xl ' style={{backgroundColor:'rgb(40,75,99)'}}>
          <ul  className='flex justify-evenly'>
            <li className='py-3 hover:text-slate-300 text-xl font-semibold text-white'><a href="https://www.linkedin.com/in/yash-tiwari-01abab285/" target='blank'>Linkedin.</a></li>
            <li className='py-3 hover:text-slate-300 text-xl font-semibold text-white'><a href="https://x.com/yash_700757" target='blank'>Twitter.</a></li>
            <li className='py-3 hover:text-slate-300 text-xl font-semibold text-white'><a href="https://www.instagram.com/yash_pandit_8/" target='blank'>Instagram.</a></li>
          </ul>
        </div> */}
      </div>

    </motion.div>
    
  )
}

export default Home