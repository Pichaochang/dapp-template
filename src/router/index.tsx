/*
 * react-router-dom v6 官方文档
 * https://reactrouter.com/en/v6.3.0/getting-started/installation
 */
import React from 'react';
// import SuspenseLazy from '@/components/SuspenseLazy';
import {RouteObject, Navigate} from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
// import Home from '@/view/Home';
import About from '../view/About/index';

// import Introduce from '@/view/Home/Introduce';
// import IntroduceTwo from '@/view/Home/IntroduceTwo';
// import IntroduceThree from '@/view/Home/IntroduceThree';

// const Introduce = () => import(/* webpackChunkName:"Introduce" */ '@/view/Home/Introduce');
// const IntroduceTwo = () => import(/* webpackChunkName:"Introduce" */ '@/view/Home/IntroduceTwo');
// const IntroduceThree = () => import(/* webpackChunkName:"Introduce" */ '@/view/Home/IntroduceThree');

// const Home = SuspenseLazy(() => import(/* webpackChunkName:"home" */ '@/view/Home'));
// const Mint = SuspenseLazy(() => import(/* webpackChunkName:"Mint" */ '@/view/Home/Mint'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/' /> // 重定向
  },

  {
    path: '/',
    element: (
      <>
       <About />
        {/* <PrivateRoute>
          <Home />
        </PrivateRoute> */}
      </>
    ),
    children: [
      // 嵌套路由
      // {
      //   path: 'introduce',
      //   element: <Introduce></Introduce>
      // },
      // {
      //   path: 'IntroduceTwo',
      //   element: <IntroduceTwo></IntroduceTwo>
      // },
      // {
      //   path: 'IntroduceThree',
      //   element: <IntroduceThree></IntroduceThree>
      // },
      // {
      //   path: 'mint',
      //   element: Mint
      // },
      // {
      //   path: 'mint2',
      //   element: Mint
      // }
      // {
      //   path: 'swap',
      //   element: Swap
      // },
      // {
      //   path: 'mintedDUF',
      //   element: MintedDUF
      // },
      // {
      //   path: 'myIncome',
      //   element: MyIncome
      // },
      // {
      //   path: 'teamIncome',
      //   element: TeamIncome
      // },
      // {
      //   path: 'burnFC',
      //   element: BurnFC
      // }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
];

export default routes;
