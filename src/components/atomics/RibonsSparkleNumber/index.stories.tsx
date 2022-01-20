import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import RibonsSparkleNumber, { Props } from ".";

export default {
  title: "RibonsSparkleNumber",
  component: RibonsSparkleNumber,
} as ComponentMeta<typeof RibonsSparkleNumber>;

const Template: ComponentStory<typeof RibonsSparkleNumber> = function (
  args: Props,
) {
  return <RibonsSparkleNumber {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  ribons: 100,
};
