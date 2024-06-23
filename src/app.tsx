import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import {StoresProvider, stores} from './store';

// import Counter from './components/counter';
// import Footer from './components/footer';
// import GithubCorner from './components/github-corner';
import Navbar from './components/navbar';
import RootProvider from './providers/root';
import routes from './router';
import {useRoutes, useNavigate, useLocation} from 'react-router-dom';
import { Button } from '@/components/ui/button';


function App() {
  const element = useRoutes(routes);

  return (
    <BrowserRouter>
      <RootProvider>
        <StoresProvider value={stores}>
          <Navbar />
          {element}
          <Button onClick={() => {
            
          }}></Button>
          {/* <main className='flex h-full flex-col items-center justify-center'>
            <GithubCorner
              title='Get started on GitHub'
              url='https://github.com/doinel1a/vite-react-ts-shadcn-ui'
            />
            <Counter />
          </main> */}

          {/* <Footer /> */}
        </StoresProvider>
        
      </RootProvider>
    </BrowserRouter>
  );
}

export default App;
