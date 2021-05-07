import React from "react";
import { Button } from "./index.js";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary button",
  color: "primary",
  onClick: () => alert("primary"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary button",
  color: "secondary",
  onClick: () => alert("secondary"),
};
