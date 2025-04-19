import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

export default {
  solidity: "0.8.0",
  networks: {
    // goerli: {
    //   // The RPC URL for the Goerli test network
    //   url: 'RPC_URL',
    //   // The private key of the account deploying the contract
    //   accounts: ['462afaebcf44ca01bf03b29f48048f684fb0dea7b674f920af0093370536b8a2']
    // },
    // sepolia: {
    //   // The RPC URL for the Sepolia test network
    //   url: 'RPC_URL',
    //   // The private key of the account deploying the contract
    //   accounts: ['462afaebcf44ca01bf03b29f48048f684fb0dea7b674f920af0093370536b8a2']
    // },
    holesky: {
      // The RPC URL for the Holesky test network
      url: 'https://holesky.infura.io/v3/637bba92f0ee42f48ac611a0e62708d5',
      // The private key of the account deploying the contract
      accounts: ['462afaebcf44ca01bf03b29f48048f684fb0dea7b674f920af0093370536b8a2']
    }
  }
};
