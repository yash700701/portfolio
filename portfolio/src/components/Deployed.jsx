import React from 'react'
import { motion } from 'framer-motion'


function Deployed() {

  function addComponentToBlog(){
      
    // Create a new component (div element)
  if(document.getElementById('blog').innerHTML == ``){
    const component = document.createElement('div');
    component.classList.add('component');
    component.innerHTML = `
      <div class="aboutdicetext">
          I developed a full-stack blog website that allows users to create, read, update, and delete their posts. The platform also includes features like liking and commenting on posts, enabling users to engage and interact with content. To ensure secure access and personalized experiences, the website incorporates user authentication. The project leverages modern technologies, including React.js and Tailwind CSS for a responsive and sleek user interface, Appwrite for backend services like authentication and database management, Redux for efficient state management, TinyMCE Editor for rich text editing, and React Hook Forms for smooth form handling. This project reflects my focus on building user-centric applications with a seamless and engaging experience.
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
    <div className='pt-2 px-2 pb-2 dark:bg-zinc-900'>
    <div
 id='smallProjects'
 className='w-full dark:shadow-white border-[2px] border-sky-700 shadow-black shadow-sm bg-[#fffcf3]  rounded-xl pt-5  h-auto text-center text-3xl flex justify-center dark:bg-black'>
    <motion.div
    initial={{opacity:0, y:10}}
    animate={{opacity:1, y:0}}
    className='grid sm:grid-cols-2'
    transition={{
      duration:1,
    }}
    >
          <div  className='w-72  dark:bg-black m-8 drop-shadow-2xl rounded-2xl ' >
              <div className='text-2xl text-sky-700 font-bold  text-left '>SKY VAULT - File Storage Application</div>
              <div id='blog' className='text-left text-sm'></div>
              <ul className='flex justify-evenly border-[2px] border-sky-700 bg-white dark:bg-black dark:text-white dark:shadow-white shadow-black shadow-sm rounded-lg mt-2 '>
                <li className='text-base text-zinc-500 m-1 hover:text-emerald-700'><a href="https://github.com/yash700701/blogProject" target="_blank">Github</a></li>
                <li className='text-base text-zinc-500  m-1 hover:text-emerald-700'><a href="https://blog-project-git-main-yash700701s-projects.vercel.app/" target="_blank" >Run</a></li>
                <li className='text-base text-zinc-500  m-1 hover:text-emerald-700'><button onClick={addComponentToBlog} >About</button></li>
              </ul>  
          </div>

          <div  className='w-72  dark:bg-black m-8 drop-shadow-2xl rounded-2xl ' >
              <div className='text-2xl text-sky-700 font-bold  text-left '>MIMZY - Social media plateform</div>
              <div id='blog' className='text-left text-sm'></div>
              <ul className='flex justify-evenly border-[2px] border-sky-700 bg-white dark:bg-black dark:text-white dark:shadow-white shadow-black shadow-sm rounded-lg mt-2 '>
                <li className='text-base text-zinc-500 m-1 hover:text-emerald-700'><a href="https://github.com/yash700701/blogProject" target="_blank">Github</a></li>
                <li className='text-base text-zinc-500  m-1 hover:text-emerald-700'><a href="https://blog-project-git-main-yash700701s-projects.vercel.app/" target="_blank" >Run</a></li>
                <li className='text-base text-zinc-500  m-1 hover:text-emerald-700'><button onClick={addComponentToBlog} >About</button></li>
              </ul>  
          </div>

          <div  className='w-72  dark:bg-black m-8 drop-shadow-2xl rounded-2xl ' >
              <div className='text-2xl text-sky-700 font-bold  text-left '>BLOGGRAM - Blog website</div>
              <div id='blog' className='text-left text-sm'></div>
              <ul className='flex justify-evenly border-[2px] border-sky-700 bg-white dark:bg-black dark:text-white dark:shadow-white shadow-black shadow-sm rounded-lg mt-2 '>
                <li className='text-base text-zinc-500 m-1 hover:text-emerald-700'><a href="https://github.com/yash700701/blogProject" target="_blank">Github</a></li>
                <li className='text-base text-zinc-500  m-1 hover:text-emerald-700'><a href="https://blog-project-git-main-yash700701s-projects.vercel.app/" target="_blank" >Run</a></li>
                <li className='text-base text-zinc-500  m-1 hover:text-emerald-700'><button onClick={addComponentToBlog} >About</button></li>
              </ul>  
          </div>
         
         
         
    </motion.div>
 </div>
</div>

  )
}

export default Deployed