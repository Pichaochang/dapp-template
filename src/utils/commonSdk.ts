import { RegisterdAbi } from './abi';
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
const {pexAddress, spexAddress, winAddress, usdbAddress, lpAddress, sbAddress, rpc, registerAddress } =  contractProdAddress;
console.log('pexAddress', pexAddress);
console.log('spexAddress', spexAddress);
console.log('winAddress', winAddress);
console.log('usdbAddress', usdbAddress);
console.log('lpAddress', lpAddress);
console.log('sbAddress', sbAddress);
// 登录钱包
console.log('rpc', rpc);
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
  } catch (error) {
    toast.error(error?.message || String(error));
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
  globalStore.setUserInfo({
    isValueUser, level, referrer
  });
  console.log(isValueUser, level, referrer);
  return Promise.resolve({
    isValueUser, level, referrer
  });
  // 0x0000000000000000000000000000000000000000
};
const getGasBase = (num:any) => {
  return String(BigInt(num) * 110n / 100n);
};
export const registerUser =  async (address:any) => {
  const obj = await getWeb3();
  if (!obj) {
    return  Promise.resolve(false);
  }
  const {web3, account}:any  = obj;
  const gasPrice:any = await web3.eth.getGasPrice();
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

export const loginWallet = async () => {
  const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
  const address = accounts[0];
  globalStore.setAddress(address);
  console.log('accounts', accounts, address);
  const res = await getUserInfo();
  if (res) {
    const { isValueUser, level, referrer }:any = res;
    return Promise.resolve({isValueUser, level, referrer});
  }
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
      await loginWallet();
    } catch (error) {
      toast.error(String('error'));
    }
    return Promise.resolve(false);
  }
  // getUserInfo();
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
    toast.error(err?.message || String(err));
    return Promise.resolve(false);
  }
};
