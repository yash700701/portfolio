import { color } from 'framer-motion'
import React, { useEffect, useState } from 'react'

function Footer() {
  

  return (
    <>
    
    <footer className='py-4 px-2 w-full  justify-center dark:bg-black '>
        <div className='h-auto grid text-xs grid-cols-2 dark:text-white rounded-xl dark:border-white border-black  border-[1px]'>
            <p className='p-2'>made with ♡ by yash</p>
            <p className='p-2'>views:-</p>
        </div>
    </footer>
    </>
  )
}

export default Footer