export const networks = {
  mumbai: {
    ribonContractAddress: "0x7aB7Aaf626D639B0f9EcFdF4A01E51F75E2eB596",
    donationTokenContractAddress: "0x21A72dc641c8e5f13717a7e087d6D63B4f9A3574",
    chainId: 0x13881,
    chainName: "Mumbai Testnet",
    rpcUrls: "https://polygon-mumbai.g.alchemy.com/v2/1fEWpdSHuohPveNBGvlozE6qv9P1uAks",
    nodeUrl: "https://rpc-mumbai.maticvigil.com",
    symbolName: "https://mumbai.polygonscan.com/",
    currencyName: "MATIC",
    blockExplorerUrls: "Matic"
  },
  localhost: {
    ribonContractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    donationTokenContractAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    chainId: 0x539,
    chainName: "Localhost 8545",
    rpcUrls: "http://localhost:8545",
    nodeUrl: "http://localhost:8545",
    symbolName: "ETH",
    currencyName: "Ether",
    blockExplorerUrls: "http://localhost:8545",
  }
}
