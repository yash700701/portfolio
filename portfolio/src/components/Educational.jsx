import React from 'react'

function Educational() {

  const horizontalStyle = `h-[1px] my-8 w-1/2 mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent border-0 `
  const h1Style = `text-base sm:text-xl font-bold text-slate-800 dark:text-slate-200`
  const h2Style = `text-xs sm:text-base text-slate-700 dark:text-gray-300`
  const h3Style = `text-xs sm:text-base dark:text-gray-400`
  return (
    <div
    className='text-center dark:bg-black pb-20'
    >
       {/* college */}
       <div className='pt-10 '>
       <hr className={horizontalStyle}></hr>
       <h1 className={h1Style}>Computer Science and Engineering</h1>
       <p className={h2Style}>JSS Academy of Technical Education</p>
       <p className={h3Style}>2023-2027</p>
       <p className={h3Style}>SGPA : 1st Semester <span className='text-cyan-700'>8.69</span></p>
       <p className={h3Style}>SGPA : 2nd Semester <span className='text-cyan-700'>8.36</span></p>
       </div>
       {/* 12th */}
       <div className='mt-10'>
       <hr className={horizontalStyle}></hr>
       <h1 className={h1Style}>Higher Secondary School</h1>
       <p className={h2Style}>Nav Bharat Public Inter College</p>
       <p className={h3Style}><span className='text-cyan-700'>94</span> percent</p>
       </div>
       {/* 10th */}
       <div className='mt-10'>
       <hr className={horizontalStyle}></hr>
       <h1 className={h1Style}>Secondary School</h1>
       <p className={h2Style}>Nav Bharat Public Inter College</p>
       <p className={h3Style}><span className='text-cyan-700'>95</span> percent</p>
       </div>
    </div>
  )
}

export default Educational