import type { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
import "@nomiclabs/hardhat-web3";
import "@nomiclabs/hardhat-truffle5";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "solidity-coverage";
import "dotenv/config";

// const  immutableZkevmMainnet: NetworkUserConfig = {
//   url: "https://bsc-dataseed.binance.org/",
//   chainId: 56,
//   accounts: [process.env.KEY_MAINNET!],
// };

const sepolia: NetworkUserConfig = {
  url: "https://rpc.notadegen.com/eth/sepolia",
  chainId: 11155111,
  accounts: [process.env.KEY_TESTNET!],
  gasPrice: 5000000007,
};

const immutableZkevmTestnet: NetworkUserConfig = {
  url: "https://rpc.testnet.immutable.com",
  chainId: 13473,
  accounts: [process.env.KEY_TESTNET!],
  gasPrice: 100000000000,
};

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    testnet: sepolia,
    //testnet: immutableZkevmTestnet,

    // mainnet: immutableZkevmMainnet,
  },
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  abiExporter: {
    path: "./data/abi",
    clear: true,
    flat: false,
  },
  etherscan: {
    apiKey: "WSDFQ3HZDJY1UZUJ4U523IZ3VGNR54FPJS",
  },
};

export default config;
