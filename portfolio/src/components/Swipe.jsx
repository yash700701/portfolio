import React, {Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { style } from 'framer-motion/client';



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

function Swipe() {


    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
      };
  return (
    <div className='dark:bg-black pt-4 px-2'>
        <Slider {...settings} className='dark:text-gray-50'>
        <div className='dark:text-white border-[1px] text-center h-96 dark:border-white border-black rounded-xl'>
            <h1 className=' text-3xl font-bold pt-5 dark:text-zinc-300 text-black' style={{fontFamily: 'Doto'}} >EXPERIENCE</h1>
            <div className='mt-5 mx-8 py-2 border-[1px] dark:border-white border-black rounded-xl'>
                <h1 className='py-3'>Internship</h1>
                <p>Frontend Developer @ <a className='text-[indianred]' href="https://www.linkedin.com/company/byteedu/posts/?feedView=all">ByteEdu</a></p>
                <p>Nov 2023 - present</p>
            </div>
            <h1 className='absolute bottom-2 pl-3 text-7xl'><span className='text-sky-700'>.</span>.</h1>
        </div>
        <div className='dark:text-white text-center border-[1px]  h-96 dark:border-white border-black rounded-xl'>
        <h1 className=' text-3xl font-bold pt-5 dark:text-zinc-300' style={{fontFamily: 'Doto'}} >QULIFICATION</h1>
            <div className='mt-5 mx-8 py-2 border-[1px] dark:border-white border-black rounded-xl'>
                <h1 className='py-3'>Bachelor of Technology in <span className='text-[indianred]'>Computer Science</span></h1>
                <p>JSS Academy of Technical education</p>
                <p>2023 - 2027</p>
            </div>
            <h1 className='absolute bottom-2 pl-3 text-7xl'>.<span className='text-sky-700'>.</span></h1>
        </div>
        </Slider>
    </div>
  )
}

export default Swipe