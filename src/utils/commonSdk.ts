/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ethers } from 'ethers';
import { contractProdAddress, walletClient, publicClient } from  './variable';
import { globalStore } from '@/store';
import { ERC20Abi } from './abi';
import { getUUID } from './utils';
import toast from 'react-hot-toast';
import i18n from '@/react-i18next-config';
const t = i18n.t;
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
    toast.error(t('global.installWallet'));
    return Promise.resolve(false);
  }
  if (!globalStore.userInfo.address) {
    try {
      await loginWallet();
    } catch (error) {
      toast.error(String('error'));
    }
    return Promise.resolve(false);
  }
  
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();
//   const contract = new ethers.Contract(chainInfo.value.ModeAddress, abi, signer);
};
export const loginWallet = async () => {
  const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
  console.log('accounts', accounts);
};
