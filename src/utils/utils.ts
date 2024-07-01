/* eslint-disable @typescript-eslint/no-explicit-any */
import {v4 as uuidv4} from 'uuid';
// import {isAddress, isAddressEqual, formatUnits, parseUnits} from 'viem';
export const getQueryVariable = function (variable: string) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
};
export const formatAddress = (address: string, startNum = 3, endNum = 3) => {
  return `${address.slice(0, startNum)}...${address.slice(address.length - endNum, address.length)}`;
};
export const getUUID = () => uuidv4();

export const getGasBase = (num:any) => {
  return String(BigInt(num) * 110n / 100n);
};

