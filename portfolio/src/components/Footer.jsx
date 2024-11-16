import React, { useEffect, useState } from 'react'

function Footer() {
  

  return (
    <>
    <div className='text-center text-xs'>
    <p className='dark:bg-black dark:text-slate-700'>views : <span className='text-red-800'>im working on this functionality</span></p>
    </div>
    <footer className='flex pt-24 justify-center dark:bg-black'>
        <div className='w-11/12 h-auto mb-3 grid sm:grid-cols-2 text-white rounded-xl bg-black dark:border-2'>
            <div className='flex'>
            <h1 className='font-bold px-5 py-4 hover:text-slate-500' style={{fontSize: "1rem"}}><a href="mailto:yashtiwari700714@gmail.com">yashtiwari700714@gmail.com</a></h1>
            </div>
            <ul className='flex justify-evenly text-sm'>
                <li className='px-3 py-4 hover:text-slate-500'><a href="https://github.com/yash700701" target="_blank">GitHub.</a></li>
                <li className='px-3 py-4 hover:text-slate-500'><a href="https://www.linkedin.com/in/yash-tiwari-01abab285/" target="_blank">Linkedin.</a></li>
                <li className='px-3 py-4 hover:text-slate-500'><a href="https://www.instagram.com/yash_pandit_8/" target="_blank">Instagram.</a></li>
                <li className='px-3 py-4 hover:text-slate-500'><a href="https://x.com/yash_700757" target="_blank">Twitter.</a></li>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default Footer