// export const fn = async () => {
//     try {
//       const web3 = new Web3(window.ethereum);
//       const getAccounts = await web3.eth.getAccounts();
//       const account = getAccounts[0];
//       if (!account) {
//         return Promise.resolve(false);
//       }
//       const myContract = new web3.eth.Contract(erc20Abi, usdbAddress);
//       const functionCall = myContract.methods.pumpMasterMint(account);
//       // 获取gasPrice
//       const gasPrice:any = await web3.eth.getGasPrice();
//       // 获取gas
//       const gasBase = await functionCall.estimateGas({ gasPrice, from: account, });
//       const gas = getGasBase(gasBase);
//       console.log('gas-gasPrice', gas, gasPrice);
//       // 预执行 result
//       const result = await functionCall.call({ gasPrice, gas, from: account });
//       if (!result) {
//         console.log('result', result);
//         return Promise.resolve(false);
//       }
//       const transaction = await functionCall.send({ gasPrice, gas, from: account });
//       console.log('transactionHash', transaction);
//       if (transaction.transactionHash) {
//         return Promise.resolve(transaction);
//       } else {
//         return Promise.resolve(false);
//       }
//     } catch (err:any) {
//       console.log('err', err?.message);
//       toast.error(err?.message || String(err));
//       return Promise.resolve(false);
//     }
//   };