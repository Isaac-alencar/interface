import React from "react";
import { renderComponent } from "config/testUtils";
import { mockRequest } from "config/testUtils/test-helper";
import nonProfitFactory from "config/testUtils/factories/nonProfitFactory";
import {
  expectLogEventToHaveBeenCalledWith,
  expectTextToBeInTheDocument,
} from "config/testUtils/expects";
import Causes from ".";

jest.mock(
  "components/atomics/sections/Header",
  () =>
    function () {
      return null;
    },
);
// const spy = jest.spyOn(Header, "Header");

describe("Causes", () => {
  const nonProfit1 = nonProfitFactory({
    id: 1,
    impactDescription: "days of impact",
    impactByTicket: 2,
  });
  mockRequest("/api/v1/non_profits", {
    payload: [nonProfit1],
  });

  beforeEach(() => {
    renderComponent(<Causes />);
  });

  it("renders the title", () => {
    expectTextToBeInTheDocument("Causes");
  });

  it("shows the non profit", () => {
    expectTextToBeInTheDocument(
      `${nonProfit1.impactByTicket} ${nonProfit1.impactDescription}`,
    );
  });

  describe("when the page state is donationFailed", () => {
    beforeEach(() => {
      renderComponent(<Causes />, {
        locationState: {
          failedDonation: true,
        },
      });
    });

    it("logs the donateDonationError_view event", () => {
      expectLogEventToHaveBeenCalledWith("donateDonationError_view");
    });
  });
});
