/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import routes from './router';
import { useRoutes } from 'react-router-dom';
// import { Toaster } from '@/components/ui/toaster'
import { Toaster } from 'react-hot-toast';
import { globalVaild, loginWallet } from '@/utils/commonSdk';

import BindInvitation  from '@/components/bindInvitation';
import { getQueryVariable } from './utils/utils';
// import { useStores } from '@/store';
// import Web3 from 'web3';
function App() {
  const [recAddress] = useState(String(getQueryVariable('address') || ''));

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
  const [open, setOpen] = useState(false);
  const bindFn = async () => {
    const res:any = await globalVaild();
    if (recAddress && !(res?.referrer)) {
      console.log('recAddress', recAddress);
      setOpen(true);
    }
  };
  useEffect(() => {
    bindFn();
    setTimeout(() => {
      if (window?.ethereum) {
        // 监听 MetaMask 的账户切换事件
        window.ethereum.on('accountsChanged', (accounts: any) => {
          console.log('accountsChanged', accounts);
          loginWallet();
          setOpen(false);
          // user.account = accounts[0];
          // user.name = formatWalletAddress(accounts[0]);
          console.log('MetaMask account changed:', accounts[0]);
        });

        // 检查用户切换网络
        window.ethereum.on('chainChanged', async (chainId: any) => {
          console.log(chainId);
          // globalVaild();
        });
      }
    }, 1000);
  }, []);

  return (
    <div className='bg-[#f4f4f4] dark:bg-[#0f0f0f] min-h-screen overflow-y-auto overflow-x-hidden'>
      <BindInvitation open={open} setOpen={setOpen} recAddress={recAddress}></BindInvitation>
      <div className='p-3 pt-0'>
        {element}
      </div>
      <Toaster></Toaster>
    </div>

  );
}

export default App;
