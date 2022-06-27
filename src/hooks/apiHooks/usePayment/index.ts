import { useApi } from "hooks/useApi";
import creditCardPaymentApi from "services/api/creditCardPaymentApi";
import CreditCardPayment from "types/entities/CreditCardPayment";

function usePayment(paymentInformation: CreditCardPayment) {
  const { data: paymentValues, isLoading } = useApi({
    key: "payment",
    fetchMethod: () =>
      creditCardPaymentApi.postCreditCardPayment(paymentInformation),
  });

  return { paymentValues, isLoading };
}

export default usePayment;
