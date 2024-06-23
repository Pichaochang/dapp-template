import React from 'react';
import {useConnect, useAccount} from 'wagmi';
import {injected} from 'wagmi/connectors';

import contractInfo, {walletClient} from '@/contract/index';
const {contractAddress} = contractInfo;
const useConnectWallet = () => {
  const {chainId: addressChainId, address, addresses, isConnected, status, ...query} = useAccount();
  const {connectAsync} = useConnect();
  const connectWalletFn = async () => {
    console.log('connectWalletFnhooks', isConnected, address, addressChainId);
    try {
      const connectRes: any = await connectAsync({connector: injected()}).catch((error) => {
        console.log('connectAsync', error);
        return Promise.resolve(false);
      });
      console.log('connectRes', connectRes);
      if (addressChainId && addressChainId !== contractAddress.rpc.id) {
        await walletClient.switchChain({id: contractAddress.rpc.id}).catch((error) => {
          console.log('switchChainFn', error);
          return Promise.resolve(false);
        });
        return Promise.resolve('needSign');
      }
      return Promise.resolve(true);
    } catch (error) {
      console.log('connectWalletFn', error);
    }
  };
  const swtichNetwork = async () => {
    try {
      await walletClient.switchChain({id: contractAddress.rpc.id});
      return Promise.resolve(false);
    } catch (error) {
      console.log('switchChainFn', error);
      return Promise.reject(false);
    }
  };
  return {
    swtichNetwork,
    connectWalletFn,
    address,
    status,
    addressChainId,
    rpcId: contractAddress.rpc.id
  };
};
export default useConnectWallet;
