import * as S from "./styles";
import { useContract } from "../../hooks/useContract";
import abi from "../../utils/RibonContract.json";

function HomePage(): JSX.Element {
  const { contract } = useContract({
    contractAddress: "0xE5DaB7B5310aD58Fae0808de7610277cA6Da9Ab6",
    contractAbi: abi,
  });

  return (
    <S.Container>
      <h1>Testando</h1>
    </S.Container>
  );
}

export default HomePage;
