import { ComponentStory, ComponentMeta } from "@storybook/react";
import clockAnimation from "assets/animations/clock-animation.json";
import React from "react";

import ModalAnimation, { Props } from ".";

export default {
  title: "ModalAnimation",
  component: ModalAnimation,
} as ComponentMeta<typeof ModalAnimation>;

const Template: ComponentStory<typeof ModalAnimation> = function (args: Props) {
  return <ModalAnimation {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  title: "Title",
  animationData: clockAnimation,
  visible: true,
  primaryButtonText: "ma oee",
  secondaryButtonText: "oeeee",
};
