import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import PaymentInformation from ".";

describe("PaymentInformationSection", () => {
  it("should render without error", () => {
    renderComponent(<PaymentInformation />);

    expectTextToBeInTheDocument("Payment method");
  });

  it("should fill payment methods form", () => {
    renderComponent(<PaymentInformation />);

    userEvent.type(screen.getByPlaceholderText("E-mail"), "leticia@ribon.io");

    userEvent.type(
      screen.getByPlaceholderText("Card number"),
      "1234567890123456",
    );

    userEvent.type(
      screen.getByPlaceholderText("Name on card"),
      "Leticia Ribon",
    );

    userEvent.type(screen.getByPlaceholderText("Expiration"), "1220");

    userEvent.type(
      screen.getByPlaceholderText("Card verification code"),
      "123",
    );
  });
});
