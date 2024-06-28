/* eslint-disable @typescript-eslint/no-unused-vars */
import { ethers } from 'ethers';
import { contractProdAddress, walletClient, publicClient } from  './variable';
import { globalStore } from '@/store';
import { ERC20Abi } from './abi';
import { getUUID } from './utils';

const {pexAddress, spexAddress, winAddress, usdbAddress, lpAddress, sbAddress, rpc } =  contractProdAddress;
console.log('pexAddress', pexAddress);
console.log('spexAddress', spexAddress);
console.log('winAddress', winAddress);
console.log('usdbAddress', usdbAddress);
console.log('lpAddress', lpAddress);
console.log('sbAddress', sbAddress);
console.log('rpc', rpc);

export const globalVaild = async () => {
  console.log('globalStore', globalStore, ERC20Abi);
  if(window?.ethereum) {
    return Promise.resolve(false);
  }
  if (!globalStore.userInfo.address) {
    await loginWallet();
    return Promise.resolve(false);
  }
  
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();
//   const contract = new ethers.Contract(chainInfo.value.ModeAddress, abi, signer);
};
export const loginWallet = async () => {

};
