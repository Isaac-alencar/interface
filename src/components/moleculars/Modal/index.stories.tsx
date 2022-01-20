import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Modal, { Props } from ".";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = function (args: Props) {
  return <Modal {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
