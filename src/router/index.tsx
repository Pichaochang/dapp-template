/*
 * react-router-dom v6 官方文档
 * https://reactrouter.com/en/v6.3.0/getting-started/installation
 */
import React from 'react';
// import SuspenseLazy from '@/components/SuspenseLazy';
import {RouteObject, Navigate, Outlet} from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
// import Home from '@/view/Home';
import DashBoard from '../view/DashBoard/index';
import Stake from '@/view/stake/index';
import Bond from '@/view/bond/index';
import ClaimProfit from '@/view/claimProfit/index';
import WinReward from '@/view/winReward/index';
import DaoReward from '@/view/daoReward/index';
import IdoReward from '@/view/idoReward/index';
import Boadroom from '@/view/boadroom/index';

import Navbar from '../components/navbar';







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
    element: <Navigate to='/DashBoard' /> // 重定向
  },
  {
    path: '/',
    element: (
      <>
      <Navbar />
      <Outlet></Outlet>
        {/* <PrivateRoute>
          <Home />
        </PrivateRoute> */}
      </>
    ),
    children: [
      {
        path: 'DashBoard',
        element: <DashBoard></DashBoard>
      },
      {
        path: 'Stake',
        element: <Stake></Stake>
      },
      {
        path: 'Bond',
        element: <Bond></Bond>
      },
      {
        path: 'ClaimProfit',
        element: <ClaimProfit></ClaimProfit>
      },
      {
        path: 'Stake',
        element: <WinReward></WinReward>
      },
      {
        path: 'DaoReward',
        element: <DaoReward></DaoReward>
      },
      {
        path: 'IdoReward',
        element: <IdoReward></IdoReward>
      },
      {
        path: 'Boadroom',
        element: <Boadroom></Boadroom>
      },
      
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
];

export default routes;
