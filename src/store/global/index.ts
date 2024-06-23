/* eslint-disable @typescript-eslint/no-explicit-any */
import {makeAutoObservable, runInAction} from 'mobx';
import {fetchPokemon} from '../../api';

import i18n from '../../react-i18next-config';
// import {Picker} from 'antd-mobile';
// constaddressType = `0x${string}` | null
interface userInfoDTO {
  id?: number;
  address?: string;
  leaderAddress?: string;
  level?: number;
  promoteUSDTAmout?: number;
  btgmBlance?: number;
  usdtBlance?: number;
  createTime?: string;
  updateTime?: string;
  dufBalance?: 0n;
  userInvitationAmount?: 0n;
  bigAreaAmount?: 0n;
  smallAreaAmount?: 0n;
}
class Global {
  constructor() {
    // makeAutoObservable: 自动将所有属性和方法转换为可观察对象。
    makeAutoObservable(this);
  }
  count = 0;
  dufRatio = 0;
  name = 'react';
  data: any = [];
  i18n = i18n;
  loading = true;
  signtrue = null;
  token = null;
  fcBlance = 0;
  usdtBlance = 0;
  userInvitationAmount: any = 0n;
  bigAreaAmount: any = 0n;
  smallAreaAmount: any = 0n;
  dufBlance: any = 0n;
  canUseDufBalance: any = 0n;
  usdtPower: any = 0n;
  residualIncomeAmount: any = 0n;
  userInfo: any = {
    id: 0,
    address: '',
    leaderAddress: '', // dream余额
    dreamBalance: '',
    dreamEqUsdtBalance: '', // dream余额约等于多少usdt
    totalPrice: '',
    hourlyEarnings: '',
    createTime: '',
    updateTime: ''
  };

  addCount = () => {
    this.count++;
  };
  setFcBlance = (value: any) => {
    this.fcBlance = value || 0;
  };
  setUsdtBlance = (value: any) => {
    this.usdtBlance = value || 0;
  };
  setDufBlance = (value: any) => {
    this.dufBlance = value || 0;
  };
  setBalance = (value1: number, value2: number, value3: number) => {
    this.fcBlance = value1 || 0;
    this.usdtBlance = value2 || 0;
    this.dufBlance = value3 || 0n;
  };
  getUserInfo = () => {
    return this.userInfo;
  };
  setUserInfo = (userInfo: any) => {
    this.userInfo = userInfo;
    // this.setDufBlance(userInfo.dufBalance);
    // this.canUseDufBalance = userInfo.canUseDufBalance;
    // this.usdtPower = userInfo.usdtPower;
    // this.residualIncomeAmount = userInfo.residualIncomeAmount;
    // this.dufRatio = userInfo.dufRatio;
  };
  getToken = () => {
    return this.token;
  };
  setToken = (token: any) => {
    this.token = token;
  };
  setName = (data: string) => {
    this.name = data;
  };
  getSigntrue() {
    return this.signtrue;
  }
  setSigntrue(signtrue: `0x${string}` | any) {
    this.signtrue = signtrue;
  }

  changeLanguage = async () => {
    console.log(111);
    // const value = await Picker.prompt({
    //   confirmText: i18n.t('global.confirmText'),
    //   cancelText: i18n.t('global.cancelText'),
    //   columns: [
    //     [
    //       {label: '中文(繁體)', value: 'zh-TW'},
    //       {label: 'English', value: 'en-US'}
    //     ]
    //   ]
    // });
    // if (value) {
    //   i18n.changeLanguage(String(value));
    // }
  };
  getFetchGetTest = async (params: pokemonOptions) => {
    try {
      const result: any = await fetchPokemon(params);
      const {results} = result;
      // 在 MobX 中，不管是同步还是异步操作，都可以放到 action 中，
      // 只是异步操作在修改属性时，需要将赋值操作放到 runInAction 中。
      runInAction(() => {
        this.data = results;
        this.loading = false;
      });
    } catch (err) {
      console.log(err);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const globalStore = new Global();
export {globalStore};
