/* eslint-disable @typescript-eslint/no-unused-vars */
import { contractProdAddress, walletClient, publicClient } from  './variable';


const {pexAddress, spexAddress, winAddress, usdbAddress, lpAddress, sbAddress, rpc } =  contractProdAddress;
console.log('pexAddress', pexAddress);
console.log('spexAddress', spexAddress);
console.log('winAddress', winAddress);
console.log('usdbAddress', usdbAddress);
console.log('lpAddress', lpAddress);
console.log('sbAddress', sbAddress);
console.log('rpc', rpc);


// export const globalVaild = async () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum)
//     const signer = provider.getSigner()
//     const contract = new ethers.Contract(chainInfo.value.ModeAddress, abi, signer)
// }