import React from 'react'
import {motion} from 'framer-motion'


function SmallProj() {

  function addComponentToDice(){
      
      // Create a new component (div element)
    if(document.getElementById('dice').innerHTML == ``){
      const component = document.createElement('div');
      component.classList.add('component');
      component.innerHTML = `
        <div class="aboutdicetext">
        The Dice Game is a fun, interactive web application I developed using React, with HTML, CSS, and JavaScript forming the foundational technologies. The game is designed to showcase my skills in building dynamic and responsive user interfaces while applying modern React practices for state management and component-based architecture.
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
      document.getElementById('dice').appendChild(component);
    }  
  }
  function addComponentToTodo(){
      
      // Create a new component (div element)
    if(document.getElementById('todo').innerHTML == ``){
      const component = document.createElement('div');
      component.classList.add('component');
      component.innerHTML = `
        <div class="aboutdicetext">
        I created a To-Do application using React, where I explored and implemented the Context API for state management. This project allowed me to understand the importance of avoiding prop-drilling and managing global states efficiently in a React application.
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
      document.getElementById('todo').appendChild(component);}
  }
  function addComponentToReport(){
      
      // Create a new component (div element)
    if(document.getElementById('report').innerHTML == ``){
      const component = document.createElement('div');
      component.classList.add('component');
      component.innerHTML = `
        <div class="aboutdicetext">
       The Report Management System is a web-based platform designed to streamline daily activity tracking within an organization. Built using Next.js and MongoDB, the system enables employees to submit detailed reports of their daily tasks, ensuring transparency and accountability. On the administrative side, authorized admins have access to a comprehensive dashboard where they can view, filter, and manage reports submitted by all employees. This project simplifies team oversight and improves productivity by providing an organized and centralized reporting mechanism.
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
      document.getElementById('report').appendChild(component);}
  }
  function addComponentToJwel(){
      
      // Create a new component (div element)
    if(document.getElementById('jwel').innerHTML == ``){
      const component = document.createElement('div');
      component.classList.add('component');
      component.innerHTML = `
        <div class="aboutdicetext">
       I built a sleek and user-friendly jewelry website that lets customers browse a stunning collection of jewelry and add items to their cart for a seamless shopping experience. The platform is designed to be intuitive and responsive, ensuring a smooth experience across devices. It features efficient cart management, allowing users to keep track of their favorite pieces effortlessly.
       This project combines clean design with functional e-commerce features, showcasing my ability to create practical and visually appealing web applications.</br>
       * Designed by <a style="color:indianred;" href="https://www.linkedin.com/in/shaurya-singh-siwach/" target="_blank">@Decipher</a>
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
      document.getElementById('jwel').appendChild(component);}
  }
  
  return (
    <div className='pt-2 pb-2 px-2 dark:bg-zinc-900'>
        <div
     id='smallProjects'
     className='w-full border-[2px] border-sky-700 bg-[#fffcf3] dark:shadow-white shadow-black shadow-sm rounded-xl pt-5  h-auto text-center text-3xl flex justify-center dark:bg-black'>
        <motion.div
        initial={{opacity:0, y:10}}
        animate={{opacity:1, y:0}}
        className='grid sm:grid-cols-2'
        transition={{
          duration:1,
        }}
        >
              
              <div  className='w-72  dark:bg-black m-8 drop-shadow-2xl rounded-2xl ' >
                  <div  className='text-left text-2xl text-sky-700 font-bold '>Reports management system</div>
                  <div id='report' className='text-white  text-left text-xl'></div>
                  <ul className='flex justify-evenly border-[2px] border-sky-700 bg-white dark:bg-black dark:text-zinc-500 dark:shadow-white shadow-black shadow-sm rounded-xl mt-2 '>
                    <li className='text-base  m-1 hover:text-sky-700'><a href="https://github.com/yash700701/nextbyte" target="_blank">Github</a></li>
                    <li className='text-base  m-1 hover:text-sky-700'><a href="https://afj-reports.vercel.app/" target="_blank" >Run</a></li>
                    <li className='text-base  m-1 hover:text-sky-700'><button onClick={addComponentToReport} >About</button></li>
                  </ul>  
              </div> 

              <div  className='w-72  dark:bg-black m-8 drop-shadow-2xl rounded-2xl ' >
                  <div  className='text-left text-2xl text-sky-700 font-bold '>JWELS.CO - E Commerce website</div>
                  <div id='jwel' className='text-white  text-left text-xl'></div>
                  <ul className='flex justify-evenly border-[2px] border-sky-700 bg-white dark:bg-black dark:text-zinc-500 dark:shadow-white shadow-black shadow-sm rounded-xl mt-2 '>
                    <li className='text-base  m-1 hover:text-sky-700'><a href="https://github.com/yash700701/jewellery.LandingPage" target="_blank">Github</a></li>
                    <li className='text-base  m-1 hover:text-sky-700'><a href="https://incredible-valkyrie-9434ff.netlify.app/" target="_blank" >Run</a></li>
                    <li className='text-base  m-1 hover:text-sky-700'><button onClick={addComponentToJwel} >About</button></li>
                  </ul>  
              </div> 

              <div  className='w-72  dark:bg-black m-8 drop-shadow-2xl rounded-2xl ' >
                  <div className='text-2xl text-sky-700 font-bold text-left '>Dice Game</div>
                  <div id='dice' className='text-white  text-left text-xl'></div>
                  <ul className='flex justify-evenly border-[2px] border-sky-700 bg-white dark:bg-black dark:text-zinc-500 dark:shadow-white shadow-black shadow-sm rounded-xl mt-2 '>
                    <li className='text-base  m-1 hover:text-sky-700'><a href="https://github.com/yash700701/diceGame" target="_blank">Github</a></li>
                    <li className='text-base  m-1 hover:text-sky-700'><a href="https://dicegamebyyash.netlify.app/" target="_blank" >Play</a></li>
                    <li className='text-base  m-1 hover:text-sky-700'><button onClick={addComponentToDice} >About</button></li>
                  </ul>  
              </div>

              <div className='w-72 dark:bg-black m-8 drop-shadow-2xl rounded-2xl '>
                  <div  className='text-left text-2xl text-sky-700 font-bold '>Todo List</div>
                  <div id='todo' className='text-white  text-left text-xl'></div>
                  <ul className='flex justify-evenly border-[2px] border-sky-700 bg-white dark:bg-black dark:text-zinc-500 dark:shadow-white shadow-black shadow-sm rounded-xl mt-2'>
                    <li className='text-base m-1 hover:text-sky-700'><a href="https://github.com/yash700701/todo" target="_blank">Github</a></li>
                    <li className='text-base m-1 hover:text-sky-700'><a href="https://monumental-naiad-d18170.netlify.app/" target="_blank" >Run</a></li>
                    <li className='text-base m-1 hover:text-sky-700'><button onClick={addComponentToTodo} >About</button></li>
                  </ul>
              </div>
        </motion.div>
     </div>
    </div>
  )
}

export default SmallProj