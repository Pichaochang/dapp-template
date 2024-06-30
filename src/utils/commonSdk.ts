/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ethers } from 'ethers';
import { contractProdAddress, walletClient, publicClient } from  './variable';
import { globalStore } from '@/store';
import { ERC20Abi } from './abi';
import { getUUID } from './utils';
import toast from 'react-hot-toast';
import i18n from '@/react-i18next-config';
import Web3 from 'web3';
import { erc20Abi } from 'viem';
const t = i18n.t;
const {pexAddress, spexAddress, winAddress, usdbAddress, lpAddress, sbAddress, rpc } =  contractProdAddress;
console.log('pexAddress', pexAddress);
console.log('spexAddress', spexAddress);
console.log('winAddress', winAddress);
console.log('usdbAddress', usdbAddress);
console.log('lpAddress', lpAddress);
console.log('sbAddress', sbAddress);
// 登录钱包
console.log('rpc', rpc);
export const getUserInfo  = async () => {
  // todo
};
const getGasBase = (num:any) => {
  return String(BigInt(num) * 110n / 100n);
};
export const loginWallet = async () => {
  const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
  const address = accounts[0];
  globalStore.setAddress(address);
  console.log('accounts', accounts, address);
};
// 前置检验
export const globalVaild = async () => {
  if(!window?.ethereum) {
    toast.error(t('global.installWallet'));
    return Promise.resolve(false);
  }
  if (!globalStore.address) {
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
export const fn = async () => {
  try {
    const web3 = new Web3(window.ethereum);
    const getAccounts = await web3.eth.getAccounts();
    const account = getAccounts[0];
    if (!account) {
      return Promise.resolve(false);
    }
    const myContract = new web3.eth.Contract(erc20Abi, usdbAddress);
    const functionCall = myContract.methods.pumpMasterMint(account);
    // 获取gasPrice
    const gasPrice:any = await web3.eth.getGasPrice();
    // 获取gas
    const gasBase = await functionCall.estimateGas({ gasPrice, from: account, });
    const gas = getGasBase(gasBase);
    console.log('gas-gasPrice', gas, gasPrice);
    // 预执行 result
    const result = await functionCall.call({ gasPrice, gas, from: account });
    if (!result) {
      console.log('result', result);
      return Promise.resolve(false);
    }
    const transaction = await functionCall.send({ gasPrice, gas, from: account });
    console.log('transactionHash', transaction);
    if (transaction.transactionHash) {
      return Promise.resolve(transaction);
    } else {
      return Promise.resolve(false);
    }
  } catch (err:any) {
    console.log('err', err?.message);
    return Promise.resolve(false);
  }
};
