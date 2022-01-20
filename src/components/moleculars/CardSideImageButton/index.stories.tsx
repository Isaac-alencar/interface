import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardImage from "assets/images/newspaper.svg";
import React from "react";
import theme from "styles/theme";
import CardSideImageButton, { Props } from ".";

export default {
  title: "CardSideImageButton",
  component: CardSideImageButton,
  parameters: {
    backgrounds: {
      default: "ribonBlue",
      values: [{ name: "ribonBlue", value: theme.colors.ribonBlue }],
    },
  },
} as ComponentMeta<typeof CardSideImageButton>;

const Template: ComponentStory<typeof CardSideImageButton> = function (
  args: Props,
) {
  return <CardSideImageButton {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  buttonText: "text",
  icon: CardImage,
  title: "Title",
  counter: 5,
  ribons: 100,
};
