import React from "react";
import { screen } from "@testing-library/react";
import { renderComponent } from "config/testUtils";
import ModalBlank from ".";

describe("ModalBlank", () => {
  it("should render without error", () => {
    renderComponent(
      <ModalBlank visible>
        <div>blank</div>
      </ModalBlank>,
    );
    expect(screen.getByText("blank")).toBeInTheDocument();
  });
});
