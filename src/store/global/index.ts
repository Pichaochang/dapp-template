/* eslint-disable @typescript-eslint/no-explicit-any */
import {makeAutoObservable, runInAction} from 'mobx';
// import {fetchPokemon} from '../../api';
// import {Picker} from 'antd-mobile';
// constaddressType = `0x${string}` | null
class Global {
  constructor() {
    // makeAutoObservable: 自动将所有属性和方法转换为可观察对象。
    makeAutoObservable(this);
  }
  address = '';
  count = 0;
  dufRatio = 0;
  name = 'react';
  token = null;
  signtrue = null;
  userInfo: any = {
    isValueUser: null, 
    level: null, 
    referrer: null
  };
  setUserInfo = (userInfo: any) => {
    this.userInfo = userInfo;
  };
  setAddress = (address: any) => {
    this.address = address;
  };
  setToken = (token: any) => {
    this.token = token;
  };
  setSigntrue(signtrue: `0x${string}` | any) {
    this.signtrue = signtrue;
  }

  getFetchGetTest = async () => {
    try {
      // const result: any = await fetchPokemon(params);
      // const {results} = result;
      // 在 MobX 中，不管是同步还是异步操作，都可以放到 action 中，
      // 只是异步操作在修改属性时，需要将赋值操作放到 runInAction 中。
      runInAction(() => {
        // this.data = results;
        // this.loading = false;
      });
    } catch (err) {
      console.log(err);
      runInAction(() => {
        // this.loading = false;
      });
    }
  };
}

const globalStore = new Global();
export {globalStore};
