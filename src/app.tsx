import React from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';
// import { Toaster } from '@/components/ui/toaster'
import { Toaster } from 'react-hot-toast';

import BindInvitation  from '@/components/bindInvitation';
import { useStores } from '@/store';

function App() {
  const element = useRoutes(routes);
  const {globalStore} = useStores();
  return (
    <div className='bg-[#f4f4f4] dark:bg-[#0f0f0f] min-h-screen overflow-y-auto overflow-x-hidden'>
      <BindInvitation></BindInvitation>
      <div className='p-3 pt-0'>
        {element}
      </div>
      <Toaster></Toaster>
    </div>

  );
}

export default App;
