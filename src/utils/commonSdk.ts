/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegisterdAbi } from './abi';
// import { ethers } from 'ethers';
import { contractProdAddress, walletClient, publicClient } from  './variable';
import { globalStore } from '@/store';
import { getUUID, getGasBase } from './utils';
import toast from 'react-hot-toast';
import i18n from '@/react-i18next-config';
import Web3 from 'web3';
import { erc20Abi } from 'viem';

const t = i18n.t;
const {pexAddress, spexAddress, winAddress, usdbAddress, lpAddress, sbAddress, rpc, registerAddress } =  contractProdAddress;
console.log('pexAddress', pexAddress);
console.log('spexAddress', spexAddress);
console.log('winAddress', winAddress);
console.log('usdbAddress', usdbAddress);
console.log('lpAddress', lpAddress);
console.log('sbAddress', sbAddress);
console.log('rpc', rpc);
// web3 account
const getWeb3 = async () => {
  if (!window.ethereum) {
    return Promise.resolve(false);
  }
  const web3 = new Web3(window.ethereum);
  const getAccounts = await web3.eth.getAccounts();
  const account = getAccounts[0];
  if (!account) {
    return Promise.resolve(false);
  }
  return {
    web3,
    account,
    common: {
      from: account
    }
  };
};
// 预估gas
const getGas = async (contractFn:any) => {
  const obj = await getWeb3();
  if (!obj) {
    return  Promise.resolve(false);
  }
  const {web3, common}:any  = obj;
  // 获取gasPrice
  const gasPrice:any = await web3.eth.getGasPrice();
  // 获取gas
  try {
    const gasBase = await contractFn.estimateGas({ gasPrice, ...common, });
    const gas = getGasBase(gasBase);
    console.log('gas-gasPrice', gas, gasPrice);
    return Promise.resolve({
      gas,
      gasPrice,
      ...common
    });
  } catch (error:any) {
    toast.error(error?.data?.message || error?.message || String(error));
    return Promise.resolve(false);
  }
};
export const getUserInfo  = async () => {
  const web3 = new Web3(window.ethereum);
  const getAccounts = await web3.eth.getAccounts();
  const account = getAccounts[0];
  if (!account) {
    return Promise.resolve(false);
  }
  const myContract = new web3.eth.Contract(RegisterdAbi, registerAddress);
  const {isValueUser, level, referrer}:any = await myContract.methods.users(account).call();
  const referrerTo =  ['0x0000000000000000000000000000000000000000'].includes(referrer) ? null : referrer;
  globalStore.setUserInfo({
    isValueUser, level, referrer: referrerTo
  });
  console.log(isValueUser, level, referrer);
  return Promise.resolve({
    isValueUser, level, 
    referrer: referrerTo
  });
};

export const loginWallet = async () => {
  const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
  const address = accounts[0];
  globalStore.setAddress(address);
  console.log('accounts', address);
  const res = await getUserInfo();
  if (res) {
    return Promise.resolve(res);
  }
  return Promise.resolve(false);
};
// 前置检验
export const globalVaild = async () => {
  if(!window?.ethereum) {
    toast.error(t('global.installWallet'));
    return Promise.resolve(false);
  }
  const web3 = new Web3(window.ethereum);

  const network = await web3.eth.getChainId();
  console.log('network', network);
  if (network != BigInt(rpc.id)) {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{chainId: rpc.chainId}]
    });
  }
  if (!globalStore.address) {
    try {
      const res = await loginWallet();
      return Promise.resolve(res);
    } catch (error) {
      toast.error(String(error));
      return Promise.resolve(false);
    }
  }
  return Promise.resolve(false);
};

export const registerUser =  async (address:any) => {
  const obj = await getWeb3();
  if (!obj) {
    return  Promise.resolve(false);
  }
  const {web3, account}:any  = obj;
  const registerContract = new web3.eth.Contract(RegisterdAbi, registerAddress);
  if (account == address) {
    toast.error(t('bind.bindErr'));
    return Promise.resolve(false);
  }
  const registerFn = await registerContract.methods.register(address);
  const gasObj = await getGas(registerFn);
  if (!gasObj) {
    return Promise.resolve(false);
  }
  const transaction = await registerFn.send(gasObj);
  console.log('transactionHash', transaction);
  if (transaction.transactionHash) {
    return Promise.resolve(transaction);
  } else {
    return Promise.resolve(false);
  }
};