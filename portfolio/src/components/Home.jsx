import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import {useTypewriter , curser} from 'react-simple-typewriter'
import yashh from './images/yashh.jpg'
import insta from './images/icons/insta.png'
import linkedin from './images/icons/linkedin.png'
import github from './images/icons/github2.png'
import mail from './images/icons/mail.png'


const links = [
  {
    social: "linkedin",
    link: "https://www.linkedin.com/in/yash-tiwari-01abab285/",
    img: linkedin,
  },
  {
    social: "github",
    link: "https://github.com/yash700701",
    img: github,
  },
  {
    social: "instagram",
    link: "https://www.instagram.com/yash_pandit_8/",
    img: insta,
  },
  {
    social: "mail",
    link: "mailto:yashtiwari700714@gmail.com",
    img: mail,
  },
  // {
  //   social: "",
  //   link: "",
  //   img: insta,
  // },
  // {
  //   social: "",
  //   link: "",
  //   img: insta,
  // },
]

function Home() {

  const [text] = useTypewriter({
    words : ['Web Devlopment.', 'Design.'],
    loop : {},
  })

  const [para, setPara] = useState('Solved 100+ Questions on Leetcode ')
  useEffect(() => {
    const paras = [`Solved 100+ Questions on Leetcode  `,
                   '100+ Score on Geeks For Geeks'
    ]
                   
    let index = 0;
      setInterval(() => {
      index = (index + 1) % paras.length; 
      setPara(paras[index]);
    }, 3000); 

  }, []);

  return (
   
   <div className='dark:bg-black'>
     <motion.div id='homeContainer' className='dark:bg-black pt-2'  
    initial={{opacity:0, y:10}}
    animate={{opacity:1, y:0}}
    transition={{
      duration:1,
    }} >
      <div className='grid sm:grid-cols-10 grid-cols-1'>
          <div className='h-60 sm:col-span-5 mx-2 my-2 flex  rounded-xl bg-gradient-to-r border-[1px] dark:border-white border-black '>
              <div className='my-20 ml-5'>
                  <h1 className='text-3xl py-1 font-bold dark:text-zinc-400'  >Hi There,</h1>
                  <h1 className='text-3xl font-bold dark:text-zinc-400'>I'm <span className='dark:text-neutral-50  text-5xl'>Yash Tiwari</span></h1>
                  <h1 className='text-xl py-1 font-semibold dark:text-zinc-400'>I'm Into <span className='text-3xl text-sky-700 ' style={{fontFamily: 'Playfair Display'}}>{text}</span></h1>
              </div>
          </div>
       
          <div className='sm:col-span-5 flex '>
              <div className='h-60 max-w-[50vh] mx-2 my-2  rounded-xl ' style={{backgroundColor:"rgb(217,217,217)"}}>
                  <img src={yashh} className='h-60 rounded-xl w-60 object-cover bg-black border-[1px] dark:border-white'  alt="profile-pic" />
              </div>

              <div className='h-60 mx-2 my-2 rounded-xl border-[1px] dark:border-white border-black w-4/5'>
                  <h1 className='dark:text-zinc-300 text-xl p-4 font-bold ' style={{fontFamily:'Doto'}}>Some Of My <span style={{fontFamily:"Playfair Display", color:"indianred"}}>Interesting Stats</span></h1>
                  <p className='dark:text-white  text-base sm:text-xl p-4 font-bold'>
                      {para}
                  </p>
              </div>
          </div>
      </div>
      
      <div className=''>
        <div className='mx-2 mt-2 rounded-xl border-[1px] dark:border-white border-black' >
          <p className='text-left pl-5 pt-4 text-lg dark:text-zinc-300 font-bold'  style={{fontFamily: 'Doto'}}>About Me.</p>
          <motion.p
          className='text-sm dark:text-white p-5 '
          initial={{opacity:0, y:5}}
          animate={{opacity:1, y:0}}
          transition={{
            duration:1,
          }}
          >
          <p>
          Hi! 👋 I’m Yash Tiwari, a front-end developer from Noida.
          I create stunning, interactive websites 🌐 using HTML, CSS, 
          JavaScript, and React 🚀. With expertise in responsive design 
          and user-friendly interfaces, I transform ideas into
          pixel-perfect solutions.
          Let’s connect! 🤝 
              <div className='pt-5 text-white'>
                  <button className='underline pt-2 rounded-lg hover:text-[indianred] text-sky-700' ><a href="https://onedrive.live.com/?cid=EE5F762A993E71BA&id=EE5F762A993E71BA%21s555d563b10524e6bb000974f8c2a436a&parId=EE5F762A993E71BA%21105&o=OneUp" target='blank'>Resume</a></button>
              </div>
          </p>
          </motion.p>
        </div>
        
      </div>

    </motion.div>
    <div className='pt-4 px-2'>
      <div className='text-white  flex justify-end px-5 gap-4 rounded-xl h-16 border-[1px] dark:border-white border-black'>
        {links.map((item)=>(
          <div key={item.social}>
           <a href={item.link}>
           <img src={item.img} className='w-10 h-10 mt-3' alt="" />
           </a>
          </div>
        ))}
      </div>
    </div>
   </div>
    
  )
}

export default Home