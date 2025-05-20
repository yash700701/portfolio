import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useTheme from './UserContext'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import h1 from './images/h1.jpg'

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


function Headder() {

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    // Detect large screens using media query
    const mediaQuery = window.matchMedia("(min-width: 1200px)");

    const applyZoom = () => {
      if (mediaQuery.matches) {
        // Apply zoom-out for large screens
        document.body.style.zoom = "135%";
      } else {
        // Reset zoom for smaller screens
        document.body.style.zoom = "100%";
      }
    };

    // Apply zoom initially and on screen resize
    applyZoom();
    mediaQuery.addEventListener("change", applyZoom);

    // Cleanup the event listener
    return () => mediaQuery.removeEventListener("change", applyZoom);
  }, []);
 
  //darkModeToggler
  const {themeMode, darkTheme, lightTheme} = useTheme()
  const [isDarkMode, setDarkMode] = useState(true);

  const onChngBtn = (e)=>{
    // const darkModeStatus = e.currentTarget.checked
    if(isDarkMode){
      lightTheme()
      setDarkMode(false)
    }else{
      darkTheme()
      setDarkMode(true)
    }
  }

  return (
  
   <div id='headerContainer' className='flex px-2  pt-3 dark:bg-zinc-900 justify-center bg-white '>
      <div 
      className='w-[100%] h-16 z-50 dark:shadow-white border-[2px] border-sky-700 shadow-black shadow-sm rounded-xl flex justify-between dark:bg-black bg-[#fffcf3]'>
        <h1 className='px-5 py-5  font-extrabold text-sky-600 font-[doto] text-base sm:text-xl'>
          portfolio.yash
        </h1>
        <ul className='flex'>
            <li className='mt-6 mr-4 '  style={{fontSize: "0.7rem" , marginLeft: "1rem"}}>
                <DarkModeSwitch
                    style={{ marginBottom: '2rem' }}
                    checked={isDarkMode}
                    onChange={onChngBtn}
                    className='dark:text-white'
                    size={20}
                />
            </li>
        </ul>     
      </div>
   </div>
  
  )
}

export default Headder