import { renderComponent } from "config/testUtils";
import { expectTextToBeInTheDocument } from "config/testUtils/expects";
import { Currencies } from "types/enums/Currencies";
import FeesSection from ".";

describe("BillingInformationSection", () => {
  it("should render without error", () => {
    renderComponent(
      <FeesSection
        givingTotal="$ 2"
        givingValue={4}
        currency={Currencies.USD}
      />,
    );

    expectTextToBeInTheDocument("Giving details");
    expectTextToBeInTheDocument("$ 2");
  });
});
