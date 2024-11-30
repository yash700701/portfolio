import React from 'react'

function WorkExp() {

  const horizontalStyle = `h-[1px] my-8 w-1/2 mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent border-0 `
  const h1Style = `text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200`
  const h2Style = `text-slate-700 dark:text-gray-300`
  const h3Style = `dark:text-gray-400`
  return (
    <div
    className='text-center dark:bg-black pb-20'
    >
       <div className='pt-10'>
          <hr className={horizontalStyle}></hr>
          <h1 className={h1Style}>Internship</h1>
          <p className={h2Style}>Frontend Developer Intern <a className='text-cyan-700' href="https://www.linkedin.com/company/byteedu/posts/?feedView=all" target='blank'>@ByteEdu</a></p>
          <p className={h3Style}>Nov 2024 - Present</p>
       </div>
      
    </div>
  )
}

export default WorkExp