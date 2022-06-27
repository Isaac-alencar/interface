import { AxiosResponse } from "axios";
import CreditCardPayment from "types/entities/CreditCardPayment";
import { apiPost } from "..";

const creditCardPaymentApi = {
  postCreditCardPayment: (
    paymentInformation: CreditCardPayment,
  ): Promise<AxiosResponse<CreditCardPayment>> =>
    apiPost("payment/credit_card/subscribe", { paymentInformation }),
};

export default creditCardPaymentApi;
