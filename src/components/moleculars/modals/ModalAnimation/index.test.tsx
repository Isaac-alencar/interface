import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import ModalAnimation from ".";

describe("ModalAnimation", () => {
  it("should render without error", () => {
    renderComponent(<ModalAnimation />);
    expect(screen.getByText("ModalAnimation")).toBeInTheDocument();
  });
});
