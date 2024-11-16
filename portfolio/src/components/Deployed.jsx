import React from 'react'
import { motion } from 'framer-motion'


function Deployed() {

  return (
    <div className='w-full pt-28 pb-20 text-center flex justify-center text-3xl h-auto dark:bg-black'>
       <motion.div
        initial={{opacity:0, y:10}}
        animate={{opacity:1, y:0}}
        transition={{
          duration:1,
        }}
       className='grid sm:grid-cols-2'>
           <div className='h-40 w-72 m-8 shadow-xl rounded-xl dark:bg-white'>coming soon...</div>
           <div className='h-40 w-72 m-8 shadow-xl rounded-xl dark:bg-white'>coming soon...</div>
        </motion.div>
     </div>
  )
}

export default Deployed