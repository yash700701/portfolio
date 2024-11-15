import React from 'react'
import {motion} from 'framer-motion'
import dice from './images/projects/Frame 1.png'
import todo from './images/projects/todo.png'
import lab from './images/projects/labb.png'


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
      deleteButton.innerText = '❌';
      
      
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
      deleteButton.innerText = '❌';
      
      
      // Attach delete event to the delete button
      deleteButton.addEventListener('click', function() {
          component.remove();
      });

      // Append the delete button to the component
      component.appendChild(deleteButton);

      // Append the new component to the container
      document.getElementById('todo').appendChild(component);}
  }
  function addComponentToLab(){
      
      // Create a new component (div element)
    if(document.getElementById('lab').innerHTML == ``){
      const component = document.createElement('div');
      component.classList.add('component');
      component.innerHTML = `
        <div class="aboutdicetext">
        I created an Interactive Bookstore Application using pure JavaScript 
        and DOM Manipulation, which allows users to register, log in 
        (with validations), and add books from a bookstore to a cart in real time.
        This project demonstrates how to build a dynamic and user-friendly web 
        application without relying on frameworks.
        <br>
        </div>
      `
      // Create a delete button inside the component
      const deleteButton = document.createElement('button');
      deleteButton.innerText = '❌';
      
      
      // Attach delete event to the delete button
      deleteButton.addEventListener('click', function() {
          component.remove();
      });

      // Append the delete button to the component
      component.appendChild(deleteButton);

      // Append the new component to the container
      document.getElementById('lab').appendChild(component);}
  }
  
  return (
    <div
     id='smallProjects'
     className='w-full pt-10 h-auto text-center text-3xl flex justify-center dark:bg-black'>
        <motion.div
        initial={{opacity:0, y:10}}
        animate={{opacity:1, y:0}}
        className='grid sm:grid-cols-2'
        transition={{
          duration:1,
        }}
        >
              <div  className='w-72  dark:bg-black m-8 drop-shadow-2xl rounded-2xl ' >
                  <div className='w-72 h-[250px] bg-gray-800 rounded-t-2xl'>
                      <img className='rounded-t-2xl' src={dice}/>
                  </div>
                  <div id='dice' className='text-white dark:text-black text-sm text-left '></div>
                  <ul className='flex justify-evenly bg-black text-white dark:bg-white dark:text-black rounded-b-2xl mt-2 '>
                    <li className='text-base  m-1 hover:text-emerald-700'><a href="https://github.com/yash700701/diceGame" target="_blank">Github</a></li>
                    <li className='text-base  m-1 hover:text-emerald-700'><a href="https://dicegamebyyash.netlify.app/" target="_blank" >Play</a></li>
                    <li className='text-base  m-1 hover:text-emerald-700'><button onClick={addComponentToDice} >About</button></li>
                  </ul>  
              </div>
              <div className='w-72 dark:bg-black m-8 drop-shadow-2xl rounded-2xl '>
                  <div className='w-72 h-[250px] bg-gray-800 rounded-t-2xl'>
                      <img className='rounded-t-2xl' src={todo}/>
                  </div>
                  <div id='todo' className='text-white text-sm dark:text-black text-left '></div>
                  <ul className='flex justify-evenly bg-black text-white dark:bg-white dark:text-black rounded-b-2xl mt-2'>
                    <li className='text-base m-1 hover:text-emerald-700'><a href="https://github.com/yash700701/todo" target="_blank">Github</a></li>
                    <li className='text-base m-1 hover:text-emerald-700'><a href="https://monumental-naiad-d18170.netlify.app/" target="_blank" >Run</a></li>
                    <li className='text-base m-1 hover:text-emerald-700'><button onClick={addComponentToTodo} >About</button></li>
                  </ul>
              </div>
              <div  className='w-72  dark:bg-black m-8 drop-shadow-2xl rounded-2xl ' >
                  <div className='w-72 h-[250px] bg-gray-800 rounded-t-2xl'>
                      <img className='rounded-t-2xl' src={lab}/>
                  </div>    
                  <div id='lab' className='text-white dark:text-black text-sm text-left '></div>
                  <ul className='flex justify-evenly bg-black text-white dark:bg-white dark:text-black rounded-b-2xl mt-2 '>
                    <li className='text-base  m-1 hover:text-emerald-700'><a href="https://github.com/yash700701/web-D-Lab" target="_blank">Github</a></li>
                    <li className='text-base  m-1 hover:text-emerald-700'><a href="https://webdlabproject.netlify.app" target="_blank" >Run</a></li>
                    <li className='text-base  m-1 hover:text-emerald-700'><button onClick={addComponentToLab} >About</button></li>
                  </ul>  
              </div> 
        </motion.div>
     </div>
  )
}

export default SmallProj