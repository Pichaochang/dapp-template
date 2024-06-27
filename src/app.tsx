import React from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';
// import { Toaster } from '@/components/ui/toaster'
import { Toaster } from 'react-hot-toast';


function App() {
  const element = useRoutes(routes);
  
  return (
    <div className='bg-[#f4f4f4] dark:bg-[#0f0f0f] min-h-screen overflow-y-auto overflow-x-hidden'>
      <div className='p-3 pt-0'>
        {element}
      </div>
      <Toaster></Toaster>
    </div>

  );
}

export default App;
