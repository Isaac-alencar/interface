import { mockRequest } from "config/testUtils/test-helper";
import { waitForPromises } from "config/testUtils";
import { renderHook } from "config/testUtils/renders";
import useCardGivingFees from ".";

describe("useCreditCardPayment", () => {
  let current: ReturnType<typeof useCardGivingFees>;

  describe("when the api returns a cardGivingFee", () => {
    const payload = {
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
    };
    mockRequest("api/v1/credit_card/subscribe", {
      method: "POST",
      payload,
    });

    beforeEach(async () => {
      const { hook } = renderHook(() => useCardGivingFees(payload));
      await waitForPromises();
      current = hook.result.current;
    });

    it("renders the modal when show is called", () => {
      expect(current.paymentValues).toEqual(payload);
    });
  });
});
