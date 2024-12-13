import React from 'react'
import { motion } from 'framer-motion'
import blog from './images/projects/blog2.png'


function Deployed() {

  function addComponentToBlog(){
      
    // Create a new component (div element)
  if(document.getElementById('blog').innerHTML == ``){
    const component = document.createElement('div');
    component.classList.add('component');
    component.innerHTML = `
      <div class="aboutdicetext">
      ashg
      <br>
      </div>
    `
    // Create a delete button inside the component
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    
    
    // Attach delete event to the delete button
    deleteButton.addEventListener('click', function() {
        component.remove();
    });

    // Append the delete button to the component
    component.appendChild(deleteButton);

    // Append the new component to the container
    document.getElementById('blog').appendChild(component);
  }  
}

  return (
    <div className='pt-4 px-2 dark:bg-black'>
    <div
 id='smallProjects'
 className='w-full border-[1px] dark:border-white border-black rounded-xl pt-5  h-auto text-center text-3xl flex justify-center dark:bg-black'>
    <motion.div
    initial={{opacity:0, y:10}}
    animate={{opacity:1, y:0}}
    className='grid sm:grid-cols-2'
    transition={{
      duration:1,
    }}
    >
          <div  className='w-72  dark:bg-black m-8 drop-shadow-2xl rounded-2xl ' >
              <div className='dark:text-white  text-left text-xl'>BLOG WEBSITE</div>
              <div id='blog' className='text-white  text-left text-sm'></div>
              <ul className='flex justify-evenly dark:bg-black dark:text-white border-[1px] dark:border-white border-black rounded-lg mt-2 '>
                <li className='text-base  m-1 hover:text-emerald-700'><a href="https://github.com/yash700701/blogProject" target="_blank">Github</a></li>
                <li className='text-base  m-1 hover:text-emerald-700'><a href="https://blog-project-git-main-yash700701s-projects.vercel.app/" target="_blank" >Run</a></li>
                <li className='text-base  m-1 hover:text-emerald-700'><button onClick={addComponentToBlog} >About</button></li>
              </ul>  
          </div>
         
         
         
    </motion.div>
 </div>
</div>

  )
}

export default Deployed