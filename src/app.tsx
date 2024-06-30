import React, { useState } from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';
// import { Toaster } from '@/components/ui/toaster'
import { Toaster } from 'react-hot-toast';

import BindInvitation  from '@/components/bindInvitation';
// import { useStores } from '@/store';
// import Web3 from 'web3';
function App() {

  // 获取账户余额的异步函数
  // async function getBalance(address: string) {
  // const web3 = new Web3('https://rpc.blast.io');
  //   try {
  //     const balanceWei = await web3.eth.getBalance(address);
  //     const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
  //     console.log(`Balance of ${address}: ${balanceEth} ETH`);
  //   } catch (error) {
  //     console.error(`Failed to fetch balance: ${error}`);
  //   }
  // }
  // setInterval(() => {
  //   getBalance('0x7c2385Cecb64d90862ECFD994bc6a7CD9A3b9F5C')
  //   getBalance('0x7c2385Cecb64d90862ECFD994bc6a7CD9A3b9F5C')
  //   getBalance('0x7c2385Cecb64d90862ECFD994bc6a7CD9A3b9F5C')
  //   getBalance('0x7c2385Cecb64d90862ECFD994bc6a7CD9A3b9F5C')
  //   getBalance('0x7c2385Cecb64d90862ECFD994bc6a7CD9A3b9F5C')
  //   getBalance('0x7c2385Cecb64d90862ECFD994bc6a7CD9A3b9F5C')

  // }, 1000)
  const element = useRoutes(routes);
  // const {globalStore} = useStores();
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-[#f4f4f4] dark:bg-[#0f0f0f] min-h-screen overflow-y-auto overflow-x-hidden'>
      <BindInvitation open={open} setOpen={setOpen}></BindInvitation>
      <div className='p-3 pt-0'>
        {element}
      </div>
      <Toaster></Toaster>
    </div>

  );
}

export default App;
