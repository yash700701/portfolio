import React from 'react'

function Educational() {
  return (
    <div
    className='text-center dark:bg-black'
    >
       {/* college */}
       <div className='pt-10 '>
       <hr class="h-0.5 my-8 bg-gray-200 border-0 dark:bg-slate-300"></hr>
       <h1 className='text-xl font-bold text-slate-800 dark:text-slate-200'>Computer Science and Engineering</h1>
       <p className='text-slate-700 dark:text-gray-300'>JSS Academy of Technical Education</p>
       <p className='dark:text-gray-400'>2023-2027</p>
       <p className='dark:text-gray-400'>CGPA : 1st year 8.69</p>
       </div>
       {/* 12th */}
       <div className='mt-10'>
       <hr class="h-0.5 my-8 bg-gray-200 border-0 dark:bg-slate-300"></hr>
       <h1 className='text-xl font-bold text-slate-800 dark:text-slate-200'>Higher Secondary School</h1>
       <p className='text-slate-700 dark:text-gray-300'>Nav Bharat Public Inter College</p>
       <p className='dark:text-gray-400'>94 percent</p>
       </div>
       {/* 10th */}
       <div className='mt-10'>
       <hr class="h-0.5 my-8 bg-gray-200 border-0 dark:bg-slate-300"></hr>
       <h1 className='text-xl font-bold text-slate-800 dark:text-slate-200'>Secondary School</h1>
       <p className='text-slate-700 dark:text-gray-300'>Nav Bharat Public Inter College</p>
       <p className='dark:text-gray-400'>95 percent</p>
       </div>
    </div>
  )
}

export default Educational