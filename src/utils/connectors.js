import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletLogo } from "../components/Wallet";
import { AssetsLogo } from "../components/Assets";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 137, 56, 43114],
});

export const connectorsWallet = [
  {
    name: "MetaMask",
    logo: WalletLogo.MetaMask,
    chainId: [1, 56, 137, 43114],
    connector: injected,
  },
  {
    name: "Web3",
    chainId: [1, 56, 137, 43114],
    connector: injected,
  },
];

export const supportedNetworksWallet = [
  {
    name: "Ethereum",
    label: "ETH",
    logo: AssetsLogo.Ethereum,
    explorer: "https://etherscan.io",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    connectors: [0, 1],
  },
  /*{
    name: "Rinkeby",
    label: "RINK",
    logo: AssetsLogo.Rinkeby,
    explorer: "https://rinkeby.etherscan.io",
    nativeCurrency: {
      name: "RinkEthereum",
      symbol: "RINK",
      decimals: 18,
    },
    connectors: [1],
  },*/
  {
    name: "Binance Smart Chain",
    label: "BSC",
    logo: AssetsLogo.Binance,
    blockchainName: "Binance Smart Chain Mainnet",
    explorer: "https://bscscan.com",
    rpcUrl: "https://bsc-dataseed1.binance.org",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    connectors: [0, 1],
  },
  {
    name: "Polygon",
    label: "MATIC",
    logo: AssetsLogo.Polygon,
    blockchainName: "Polygon Mainnet",
    explorer: "https://polygonscan.com",
    rpcUrl: "https://polygon-rpc.com",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    connectors: [0, 1],
  },
  {
    name: "Avalanche",
    label: "AVAX",
    logo: AssetsLogo.Avalanche,
    blockchainName: "Avalanche Mainnet",
    explorer: "https://snowtrace.io",
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,
    },
    connectors: [0, 1],
  },
];

export const networkByChainId = {
  1: "0",
  //  4: "1",
  56: "2",
  137: "3",
  43114: "4",
};

export const chainIdByNetwork = {
  0: 1,
  //1: 4,
  2: 56,
  3: 137,
  4: 43114,
};
