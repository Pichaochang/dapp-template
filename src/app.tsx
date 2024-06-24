import React from 'react';


// import Counter from './components/counter';
// import Footer from './components/footer';
// import GithubCorner from './components/github-corner';

import routes from './router';
import { useRoutes } from 'react-router-dom';
import { Button } from '@/components/ui/button';
// import { useToast } from "@/components/ui/use-toast"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"


function App() {
  const element = useRoutes(routes);
  const { toast } = useToast()
  
  return (
    <div className='bg-[#f4f4f4] dark:bg-[#0f0f0f] min-h-screen overflow-y-auto overflow-x-hidden'>
      <div className='p-3'>
        {element}
      </div>
      <Toaster></Toaster>
    </div>

  );
}

export default App;
