import React, { useEffect } from "react";
import { useWalletContext } from "contexts/walletContext";
import { useNetwork } from "hooks/useNetwork";
import RibonABI from "utils/abis/RibonAbi.json";
import { useContract } from "hooks/useContract";
import * as S from "./styles";

function HomePage(): JSX.Element {
  const { wallet, connectWallet } = useWalletContext();
  const { isValidNetwork, currentNetwork } = useNetwork();
  const contract = useContract({
    address: "0x3e9D9ec429055BB7757ae30B51C356503b98dF79",
    ABI: RibonABI.abi,
  });

  async function getDonations() {
    console.log(contract);
    const donations = await contract?.getDonationPoolBalance();
    console.log(donations);
  }

  useEffect(() => {
    getDonations();
  }, [contract]);

  return (
    <S.Container>
      <h1>HomePage</h1>
      <button type="button" onClick={connectWallet}>
        Conectar Carteira
      </button>
      <p>wallet: {wallet}</p>
      <p>
        network: {currentNetwork?.chainId} (
        {isValidNetwork() ? "valid" : "invalid"})
      </p>
    </S.Container>
  );
}

export default HomePage;
