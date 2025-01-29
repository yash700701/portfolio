import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import {useTypewriter , curser} from 'react-simple-typewriter'
import yashh from './images/yashh.jpg'
import p1 from './images/p1.jpg'
import p2 from './images/p2.jpg'
import p3 from './images/p3.jpg'
import p4 from './images/p4.jpg'
import p5 from './images/p5.jpg'
import eye from './images/h1.jpg'
import leetcode from './images/icons/leetcode.png'
import insta from './images/icons/instagram.png'
import linkedin from './images/icons/linkedin (2).png'
import github from './images/icons/github (1).png'
import mail from './images/icons/mail (2).png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      // style={{ ...style, display: "block", background: "red" }}
      // onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      // style={{ ...style, display: "block", background: "green" }}
      // onClick={onClick}
    />
  );
}

const links = [
  {
    social: "linkedin",
    link: "https://www.linkedin.com/in/yash-tiwari-01abab285/",
    img: linkedin,
  },
  {
    social: "leetcode",
    link: "https://leetcode.com/u/yash_tiwari700/",
    img: leetcode,
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
]

function Home() {

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [text] = useTypewriter({
    words : ['Web Devlopment.', 'Design.'],
    loop : {},
  })

  const paras = [
    "Solved 100+ Questions on Leetcode",
    "100+ Score on Geeks For Geeks",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % paras.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [paras.length]);

  // view count 
  

  return (
   
   <div className='dark:bg-zinc-900'>
     <motion.div id='homeContainer' className='dark:bg-zinc-900 pt-2'  
    initial={{opacity:0, y:10}}
    animate={{opacity:1, y:0}}
    transition={{
      duration:1,
    }} >
      <div className='grid sm:grid-cols-10 grid-cols-1'>
          <div className='sm:col-span-5'>
          
          <div className='p-2'>
          <div className='h-60 p-1  dark:bg-black bg-[#fffcf3] flex  rounded-xl bg-gradient-to-r dark:shadow-white shadow-black shadow-sm '>
              <div className='my-20 ml-5'>
                  <h1 className='text-3xl py-1 font-bold dark:text-zinc-400'  >Hi There,</h1>
                  <h1 className='text-3xl font-bold dark:text-zinc-400'>I'm <span className='dark:text-neutral-50  text-5xl'>Yash Tiwari</span></h1>
                  <h1 className='text-xl py-1 font-semibold dark:text-zinc-400'>I'm Into <span className='text-3xl text-sky-700 ' style={{fontFamily: 'Playfair Display'}}>{text}</span></h1>
              </div>
          </div>
          </div>
       
          </div>
          <div className='sm:col-span-5 flex '>
              
              <div className='h-60 max-w-[50vh] mx-2 my-2  rounded-xl ' style={{backgroundColor:"rgb(217,217,217)"}}>
                  <LazyLoadImage
                  src={yashh}
                  alt="img"
                  className='h-60 rounded-xl w-60 object-cover bg-black dark:shadow-white shadow-black shadow-sm'
                  effect="blur" // Adds a blur effect while loading
                  />
              </div>
              

      
              <div className='h-60 mx-2 my-2 dark:bg-black bg-[#fffcf3] rounded-xl dark:shadow-white shadow-black shadow-sm w-4/5'>
                  <h1 className='dark:text-zinc-300 text-xl p-4 font-bold ' style={{fontFamily:'Doto'}}>Some Of My <span style={{fontFamily:"Playfair Display"}} className='text-sky-700'>Interesting Stats</span></h1>
                  <p className='dark:text-zinc-500  text-base sm:text-xl p-4 font-bold'>
                      {paras[currentIndex]}
                  </p>
              </div>
            
          </div>
      </div>
      
        <div className='px-2 py-2'>
          <div className='  rounded-xl dark:bg-black bg-[#fffcf3] dark:shadow-white shadow-black shadow-sm' >
            <p className='text-left pl-5 pt-4 text-lg dark:text-zinc-300 font-bold'  style={{fontFamily: 'Doto'}}>About Me.</p>
            <motion.p
            className='text-sm dark:text-zinc-500 p-5 '
            initial={{opacity:0, y:5}}
            animate={{opacity:1, y:0}}
            transition={{
              duration:1,
            }}
            >
            <p style={{fontFamily: "Special Elite"}}>
            Hi! 👋 I’m Yash Tiwari, a MERN developer from Noida.
            I specialize in creating full-stack web applications using MongoDB, Express.js, React, and Node.js. With expertise in building responsive designs and user-friendly interfaces, I transform ideas into scalable, high-performance solutions.
            Let’s connect!
            </p>
            <div className='flex'>
            <div className='pt-5 text-white'>
                <button className='underline pt-2 rounded-lg hover:text-[indianred] text-sky-700' ><a href="" target='blank'>Resume</a></button>
            </div>
            <div className='text-white absolute right-7 pt-1'><h1 className='text-5xl text-white'><span className='text-sky-700'>.</span>.</h1></div>
            </div>
            </motion.p>
          </div>
        </div>
        
      

    </motion.div>
    <Slider {...settings}>
    <div className='py-2 px-2 dark:bg-zinc-900'>
      <div className='text-white bg-[#fffcf3] dark:bg-black flex justify-end px-5 gap-4 rounded-xl h-16 dark:shadow-white shadow-black shadow-sm'>
        {links.map((item)=>(
          <div key={item.social}>
           <a href={item.link}>
           <img src={item.img} className='w-10 h-10 mt-3' alt="" />
           </a>
          </div>
        ))}
      </div>
    </div>
    <div className='py-2 px-2 dark:bg-zinc-900'>
      <div className='text-white bg-[#fffcf3]  bg-gradient-to-r from-[#b80909] to-[#c22525] flex justify-end  gap-4 rounded-xl h-16 dark:shadow-white shadow-black shadow-sm'>
        <img src={eye} className='object-contain rounded-xl' alt="" />
      </div>
    </div>
    </Slider>
   </div>
    
  )
}

export default Home