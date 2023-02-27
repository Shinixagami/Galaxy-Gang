/* net works */

export const networks = {

  cronosTestnet: {
    chainId: `0x${Number(338).toString(16)}`,
    chainName: "Cronos Testnet",
    nativeCurrency: {
      name: "Cronos Testnet",
      symbol: "TCRO",
      decimals: 18
    },
    rpcUrls: ["https://evm-t3.cronos.org/"],
    blockExplorerUrls: ["https://testnet.cronoscan.com/"]
  },

  cronos: {
    chainId: `0x${Number(25).toString(16)}`,
    chainName: "Cronos Mainnet",
    nativeCurrency: {
      name: "Cronos",
      symbol: "CRO",
      decimals: 18
    },
    rpcUrls: ["https://evm.cronos.org/"],
    blockExplorerUrls: ["https://cronoscan.com/"]
  },

  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"]
  },



  goerli: {
    chainId: `0x${Number(5).toString(16)}`,
    chainName: "Goerli Test Network",
    nativeCurrency: {
      name: "GoerliETH",
      symbol: "GoerliETH",
      decimals: 18
    },
    rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    blockExplorerUrls: ["https://goerli.etherscan.io/"]
  },


  rinkeby: {
    chainId: `0x${Number(4).toString(16)}`,
    chainName: "Rinkeby Test Network",
    nativeCurrency: {
      name: "RinkebyETH",
      symbol: "RinkebyETH",
      decimals: 18
    },
    rpcUrls: ["https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    blockExplorerUrls: ["https://rinkey.etherscan.io/"]
  },


};