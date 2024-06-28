/* eslint-disable @typescript-eslint/no-unused-vars */

import contractProdAddressTest from './contractAddress.test';
import contractProdAddressProd from './contractAddress.prod';

export const isDevelopment = import.meta.env.MODE !== 'production'; 
export const contractProdAddress = isDevelopment ? contractProdAddressTest : contractProdAddressProd;
import {createPublicClient, http, custom, createWalletClient} from 'viem';
import { blast, baseSepolia } from 'viem/chains';
const chain = isDevelopment ? baseSepolia : blast;
export const publicClient = createPublicClient({
  chain,
  transport: http()
});
export const walletClient = createWalletClient({
  chain,
  transport: window?.ethereum ? custom(window?.ethereum) : http()
});