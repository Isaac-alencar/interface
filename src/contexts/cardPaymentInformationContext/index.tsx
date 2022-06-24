import { useCurrentUser } from "contexts/currentUserContext";
import useGivingValues from "hooks/apiHooks/useGivingValues";
import { useLanguage } from "hooks/useLanguage";
import { coinByLanguage } from "lib/coinByLanguage";
import {
  createContext,
  useContext,
  SetStateAction,
  useState,
  useMemo,
  useCallback,
} from "react";
import GivingValue from "types/entities/GivingValue";
import { Currencies } from "types/enums/Currencies";

export interface ICardPaymentInformationContext {
  setCurrentCoin: (value: SetStateAction<Currencies>) => void;
  setCountry: (value: SetStateAction<string>) => void;
  setState: (value: SetStateAction<string>) => void;
  setCity: (value: SetStateAction<string>) => void;
  setTaxId: (value: SetStateAction<string>) => void;
  setEmail: (value: SetStateAction<string>) => void;
  setCardNumber: (value: SetStateAction<string>) => void;
  setCardName: (value: SetStateAction<string>) => void;
  setExpirationDate: (value: SetStateAction<string>) => void;
  setSecurityCode: (value: SetStateAction<string>) => void;
  setSelectedButtonIndex: (value: SetStateAction<number>) => void;
  setButtonDisabled: (value: SetStateAction<boolean>) => void;
  refetchGivingValues: () => void;
  givingValue: () => number;
  givingTotal: () => string;
  buttonDisabled: boolean;
  currentCoin: Currencies;
  givingValues: GivingValue[] | undefined;
  country: string;
  state: string;
  city: string;
  taxId: string;
  email: string;
  cardNumber: string;
  cardName: string;
  expirationDate: string;
  securityCode: string;
  selectedButtonIndex: number;
  handleSubmit: () => void;
}

export type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const CardPaymentInformationContext =
  createContext<ICardPaymentInformationContext>(
    {} as ICardPaymentInformationContext,
  );

function CardPaymentInformationProvider({ children }: Props) {
  const { currentUser } = useCurrentUser();
  const { currentLang } = useLanguage();

  const [currentCoin, setCurrentCoin] = useState<Currencies>(
    coinByLanguage(currentLang),
  );
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const { givingValues, refetch: refetchGivingValues } =
    useGivingValues(currentCoin);

  const givingValue = useCallback(() => {
    if (givingValues) return givingValues[selectedButtonIndex]?.value;

    return 0;
  }, [selectedButtonIndex]);

  function givingTotal() {
    if (!givingValues) return "";
    return givingValues[selectedButtonIndex]?.valueText;
  }

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [taxId, setTaxId] = useState("");
  const [email, setEmail] = useState(currentUser?.email ?? "");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = () => {};

  const cardPaymentInformationObject: ICardPaymentInformationContext = useMemo(
    () => ({
      currentCoin,
      setCurrentCoin,
      givingValue,
      givingTotal,
      givingValues,
      refetchGivingValues,
      country,
      setCountry,
      city,
      setCity,
      state,
      setState,
      taxId,
      setTaxId,
      handleSubmit,
      setCardName,
      cardName,
      setCardNumber,
      cardNumber,
      setEmail,
      email,
      setExpirationDate,
      expirationDate,
      setSecurityCode,
      securityCode,
      selectedButtonIndex,
      setSelectedButtonIndex,
      buttonDisabled,
      setButtonDisabled,
    }),
    [
      currentCoin,
      givingValue,
      refetchGivingValues,
      country,
      city,
      state,
      taxId,
      email,
      cardNumber,
      cardName,
      expirationDate,
      securityCode,
      selectedButtonIndex,
      buttonDisabled,
    ],
  );

  return (
    <CardPaymentInformationContext.Provider
      value={cardPaymentInformationObject}
    >
      {children}
    </CardPaymentInformationContext.Provider>
  );
}

export default CardPaymentInformationProvider;

export const useCardPaymentInformation = () => {
  const context = useContext(CardPaymentInformationContext);

  if (!context) {
    throw new Error(
      "useCardPaymentInformation must be used within CardPaymentInformationProvider",
    );
  }

  return context;
};
