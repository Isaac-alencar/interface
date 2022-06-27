import InputText from "components/atomics/inputs/InputText";
import { useCardPaymentInformation } from "contexts/cardPaymentInformationContext";
import { useCurrentUser } from "contexts/currentUserContext";
import { maskToCreditCard } from "lib/maskToCreditCard";
import { maskToExpirationDate } from "lib/maskToExpirationDate";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { logEvent } from "services/analytics";
import * as S from "./styles";

function PaymentInformation() {
  const { t } = useTranslation("translation", {
    keyPrefix: "promoters.supportFundPage.paymentInformationSection",
  });

  const {
    email,
    setEmail,
    cardName,
    setCardName,
    cardNumber,
    setCardNumber,
    expirationDate,
    setExpirationDate,
    securityCode,
    setSecurityCode,
  } = useCardPaymentInformation();

  const { currentUser } = useCurrentUser();

  useEffect(() => {
    logEvent("fundSupportPayment_view");
  }, []);

  const maskExpiration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate(maskToExpirationDate(e.target.value));
  };

  const maskCreditCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(maskToCreditCard(e.target.value));
  };

  return (
    <S.PaymentInformationSectionContainer>
      <S.Title>{t("title")}</S.Title>

      <InputText
        name="email"
        placeholder={t("email")}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={!!currentUser?.email}
      />
      <InputText
        name="cardNumber"
        placeholder={t("cardNumber")}
        value={cardNumber}
        onChange={maskCreditCard}
        maxLength={19}
        required
      />
      <InputText
        name={t("cardName")}
        placeholder={t("cardName")}
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        required
      />
      <S.Half>
        <InputText
          name="cardDueDate"
          value={expirationDate}
          placeholder={t("cardDueDate")}
          onChange={maskExpiration}
          required
        />
        <InputText
          name="securityCode"
          placeholder={t("securityCode")}
          maxLength={3}
          value={securityCode}
          onChange={(e) => setSecurityCode(e.target.value)}
          required
        />
      </S.Half>
    </S.PaymentInformationSectionContainer>
  );
}

export default PaymentInformation;
