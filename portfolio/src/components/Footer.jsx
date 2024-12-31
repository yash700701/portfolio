import React, { useEffect, useState } from 'react'
import service from '../appwrite/Configuration'

function Footer() {
  

  const [v, sv] = useState(0);

  useEffect(() => {
    const id = "6773ce3300114ee5bc0d";
    
    const fetchAndUpdateData = async () => {
      try {
        const row = await service.getCount(id);
        const currentView = row.views;
        sv(currentView + 1); // Set state with incremented value
        console.log(`view = ${currentView}`);
        
        // Update view count on the server
        const views = currentView + 1;
        await service.updateView(id, views);
      } catch (error) {
        console.error("Error fetching or updating count:", error);
      }
    };
  
    fetchAndUpdateData();
  }, []);
 
  return (
    <>
    
    <footer className='py-4 px-2 w-full  justify-center dark:bg-black '>
        <div className='h-auto p-1 dark:bg-black bg-[#fffcf3] grid text-xs grid-cols-2 dark:text-white rounded-xl dark:border-white border-black dark:border-[2px] border-[3px]'>
            <p className='p-2'>made with ♡ by yash</p>
            <p className='p-2'>views:- <span className='text-cyan-700'>{v}</span></p>
        </div>
    </footer>
    </>
  )
}

export default Footer