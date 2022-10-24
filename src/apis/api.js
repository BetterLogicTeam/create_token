import Web3 from "web3";
let isItConnected = false;
var networks
const handleChangeNetwork = async (networkName, id) => {
//   if (networkName == "binance") { 
const networks = {
  bsc: {
    chainId: `0x${Number(id).toString(16)}`,
    chainName: "Binance smart chain",
    nativeCurrency: {
      name: "BSC",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org",
    ],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};
}
// else if (networkName == "MumbaiTestNet") {
// networks = {
//   bsc: {
//     chainId: `0x${Number(id).toString(16)}`,
//     chainName: "polygon smart chain",
//     nativeCurrency: {
//       name: "Mumbai TestNet",
//       symbol: "MATIC",
//       decimals: 18,
//     },
//     rpcUrls: [
//       "https://mumbai-explorer.matic.today/",

//     ],
//     blockExplorerUrls: [" https://mumbai.polygonscan.com/"],
//   },
// };
// }
// }
const changeNetwork = async ({ networkName, id }) => {
  await handleChangeNetwork(networkName, id)
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: `0x${Number(id).toString(16)}`
          // ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log("not found");
  }
};
const handleNetworkSwitch = async (networkName, id) => {
  await changeNetwork({ networkName, id });
};
let accounts;
const getAccounts = async () => {
  const web3 = window.web3;
  try {
    accounts = await web3.eth.getAccounts();
    return accounts;
  } catch (error) {
    console.log("Error while fetching acounts: ", error);
    return null;
  }
};
export const disconnectWallet = async () => {
  await window.ethereum.request({
    method: "eth_requestAccounts",
    params: [{ eth_accounts: {} }],
  });
  console.log("disconnect");
};
export const loadWeb3 = async (id) => {
  console.log('what is id', id)
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      await window.web3.eth.getChainId((err, netId) => {
        if (netId == id.id) {
          isItConnected = true;
        }
        else {
          handleNetworkSwitch(id.networkName, id.id);
          isItConnected = false;
        }
        // console.log("networkId==>", netId);
        switch (netId.toString()) {
          // case '97':
          //   isItConnected = true;
          //   break;
          // case '3':
          //   isItConnected = true;
          //   break;

          // case netId.toString() === id.id:
          //   isItConnected = true;
          //   break;
          // case netId.toString() === id.id.toString():
          //   isItConnected = true;
          //   break;
          // case netId.toString() === id.id.toString():
          //   isItConnected = true;
          //   break;
          // case netId.toString() === id.id.toString():
          //   isItConnected = true;
          //   break;
          // default:
          //   handleNetworkSwitch(id.networkName);
          //   isItConnected = false;
        }
      });
      if (isItConnected == true) {
        let accounts = await getAccounts();
        console.log('what is account', accounts)
        return accounts[0];
      } else {
        let res = "Wrong Network";
        return res;
      }
    } else {
      let res = "No Wallet";
      return res;
    }
  } catch (error) {
    let res = "No Wallet";
    return res;
  }
};