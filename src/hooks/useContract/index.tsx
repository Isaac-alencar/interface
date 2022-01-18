import { useState, useEffect } from "react";
import { ethers } from "ethers";

declare let window: any;

export type Props = {
  contractAddress: string;
  contractAbi: any;
};

export function useContract({ contractAddress, contractAbi }: Props) {
  const [contract, setContract] = useState<any | null>(null);
  const contractABI = contractAbi.abi;

  async function fetchContract() {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract: any = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        );

        setContract(wavePortalContract);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchContract();
  }, []);

  return {
    contract,
    fetchContract,
  };
}
