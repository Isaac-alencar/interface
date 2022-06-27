import creditCardPaymentApi from ".";
import api from "..";

describe("creditCardPaymentApi", () => {
  describe("#postCreditCardPayment", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      creditCardPaymentApi.postCreditCardPayment({
        country: "Brazil",
        state: "TO",
        city: "Palmas",
        taxId: "051.023.371-65",
        email: "leticia@ribon.io",
        card: {
          cardNumber: "0000 0000 0000 0000",
          cardName: "Leticia B",
          expirationDate: "06/27",
          securityCode: "000",
        },
      });

      expect(api.post).toHaveBeenCalledWith(
        "/api/v1/payment/credit_card/subscribe",
        {
          country: "Brazil",
          state: "TO",
          city: "Palmas",
          taxId: "051.023.371-65",
          email: "leticia@ribon.io",
          card: {
            cardNumber: "0000 0000 0000 0000",
            cardName: "Leticia B",
            expirationDate: "06/27",
            securityCode: "000",
          },
        },
      );
    });
  });
});
