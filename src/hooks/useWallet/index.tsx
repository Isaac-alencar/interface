import { useCallback, useState } from "react";

declare let window: any;

export function useWallet() {
  const [account, setAccount] = useState("");

  const checkIfWalletIsConnected = useCallback(async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const firstAccount = accounts[0];
        console.log("Found an authorized account:", firstAccount);
        setAccount(firstAccount);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    account,
    checkIfWalletIsConnected,
    connectWallet,
  };
}
