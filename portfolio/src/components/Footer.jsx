import { color } from 'framer-motion'
import React, { useEffect, useState } from 'react'

function Footer() {
  

  return (
    <>
    
    <footer className='p-3 w-full pt-80 justify-center dark:bg-black font-[doto]'>
        <div className='h-auto grid sm:grid-cols-2 text-white rounded-xl bg-black dark:border-[0.5px]'>
            <div>
                <h1 className='font-bold p-3 text-base sm:text-xl text-[indianred] hover:text-white' ><a href="mailto:yashtiwari700714@gmail.com">yashtiwari700714@gmail.com</a></h1>
            </div>
            <div className='grid grid-cols-4 gap-8 p-3 text-xs sm:text-base'>
                <div className='hover:text-[indianred] underline'><a href="https://github.com/yash700701" target="_blank">GitHub.</a></div>
                <div className='hover:text-[indianred] underline'><a href="https://www.linkedin.com/in/yash-tiwari-01abab285/" target="_blank">Linkedin.</a></div>
                <div className='hover:text-[indianred] underline'><a href="https://www.instagram.com/yash_pandit_8/" target="_blank">Instagram.</a></div>
                <div className='hover:text-[indianred] underline'><a href="https://x.com/yash_700757" target="_blank">Twitter.</a></div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer