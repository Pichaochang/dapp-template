import React from 'react';


// import Counter from './components/counter';
// import Footer from './components/footer';
// import GithubCorner from './components/github-corner';
import Navbar from './components/navbar';

import routes from './router';
import { useRoutes } from 'react-router-dom';
import { Button } from '@/components/ui/button';


function App() {
  const element = useRoutes(routes);

  return (
    <>
      <Navbar />
      {element}
      <Button className='text-[#000] dark:text-[#fff]' onClick={() => {}}>test
      </Button>
    </>
  );
}

export default App;
