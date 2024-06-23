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
    <>
      {element}
      
      <Button className='text-[#000] dark:text-[#fff]' onClick={() => {
        console.log('useToast', useToast)
        toast({
          variant: "destructive",
          title: 'Tips',
        })
      }}>test
      </Button>
      <Toaster></Toaster>
    </>
  );
}

export default App;
