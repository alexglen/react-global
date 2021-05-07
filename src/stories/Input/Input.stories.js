import React from "react";
import { Input } from "./index";

export default {
  title: "Example/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const SmallInput = Template.bind({});
SmallInput.args = {
  placeholder: "Movie title",
  title: "Small size input",
  type: "text",
  value: "Gone with the Wind",
  onChange: () => {},
  name: "title",
  size: "small",
};

export const MediumInput = Template.bind({});
MediumInput.args = {
  placeholder: "Movie title",
  title: "Medium size input",
  type: "text",
  value: "Gone with the Wind",
  onChange: () => {},
  name: "title",
  size: "medium",
};

export const LargeInput = Template.bind({});
LargeInput.args = {
  placeholder: "Movie title",
  title: "Large size input",
  type: "text",
  value: "Gone with the Wind",
  onChange: () => {},
  name: "title",
  size: "large",
};
