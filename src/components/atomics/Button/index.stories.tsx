import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Button, { Props } from ".";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = function (args: Props) {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
export const Outline = Template.bind({});

Primary.args = {
  text: "Button",
};

Outline.args = {
  text: "Button",
  outline: true,
};
