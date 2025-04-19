import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

export default {
  solidity: "0.8.0",
  networks: {
    goerli: {
      // The RPC URL for the Goerli test network
      url: 'RPC_URL',
      // The private key of the account deploying the contract
      accounts: ['YOUR_PRIVATE_KEY']
    },
    sepolia: {
      // The RPC URL for the Sepolia test network
      url: 'RPC_URL',
      // The private key of the account deploying the contract
      accounts: ['YOUR_PRIVATE_KEY']
    },
    holesky: {
      // The RPC URL for the Holesky test network
      url: 'RPC_URL',
      // The private key of the account deploying the contract
      accounts: ['YOUR_PRIVATE_KEY']
    }
  }
};
