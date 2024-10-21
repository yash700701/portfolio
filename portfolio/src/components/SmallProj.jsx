import React, { useState } from 'react'
import {motion} from 'framer-motion'
import dice from './images/projects/Frame 1.png'
import todo from './images/projects/todo.png'


function SmallProj() {

// add about to dice
function addComponentToDice() {
    
    // Create a new component (div element)
   if(document.getElementById('dice').innerHTML == ``){
     const component = document.createElement('div');
     component.classList.add('component');
     component.innerHTML = `
       <div class="aboutdicetext">
       about this dice project
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
    document.getElementById('dice').appendChild(component);}
}

// add about to todo
function addComponentToTodo() {
    
    // Create a new component (div element)
   if(document.getElementById('todo').innerHTML == ``){
     const component = document.createElement('div');
     component.classList.add('component');
     component.innerHTML = `
       <div class="aboutdicetext">
       about this todo project
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
  
  return (
    <div
     className='w-full pt-10 h-auto text-center text-3xl flex justify-center dark:bg-black'>
        <motion.div
        initial={{opacity:0, y:10}}
        animate={{opacity:1, y:0}}
        transition={{
          duration:1,
        }}
        className='grid sm:grid-cols-2'>
           <div  className='w-72  bg-black m-8 drop-shadow-2xl rounded-2xl dark:border-2' >
              <img className='rounded-2xl' src={dice}/>
              <div id='dice' className='text-white text-sm text-left '></div>
              <ul className='flex justify-evenly'>
                <li className='text-base text-white m-1 hover:text-emerald-700'><a href="#">Github</a></li>
                <li className='text-base text-white m-1 hover:text-emerald-700'><a href="https://dicegamebyyash.netlify.app/" target="_blank" >Play</a></li>
                <li className='text-base text-white m-1 hover:text-emerald-700'><button onClick={addComponentToDice} >About</button></li>
              </ul>  
           </div>
           <div className='w-72 bg-black m-8 drop-shadow-2xl rounded-2xl dark:border-2'>
              <img className='rounded-2xl' src={todo}/>
              <div id='todo' className='text-white text-sm text-left '></div>
              <ul className='flex justify-evenly'>
                <li className='text-base text-white m-1 hover:text-emerald-700'><a href="#">Github</a></li>
                <li className='text-base text-white m-1 hover:text-emerald-700'><a href="#" target="_blank" >Run</a></li>
                <li className='text-base text-white m-1 hover:text-emerald-700'><button onClick={addComponentToTodo} >About</button></li>
              </ul>
           </div>
        </motion.div>
     </div>
  )
}

export default SmallProj