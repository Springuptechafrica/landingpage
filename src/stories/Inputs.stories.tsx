import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components";

export default {
  title: "frontstore/Input",
  component: Input,
};

export const SampleInput: Story<any> = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "round",
  color: "gray_100",
  size: "xs",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
