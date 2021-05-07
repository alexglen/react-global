import React from "react";
import { TextArea } from "./index";

export default {
  title: "Example/TextArea",
  component: TextArea,
};

const Template = (args) => <TextArea {...args} />;

export const TextArea1 = Template.bind({});
TextArea1.args = {
  placeholder: "TextArea with 4 rows",
  title: "TextArea",
  value: "Gone with the Wind",
  onChange: () => {},
  name: "title",
  rows: 4,
};

export const TextArea2 = Template.bind({});
TextArea2.args = {
  placeholder: "TextArea with 8 rows",
  title: "TextArea",
  value: "Gone with the Wind",
  onChange: () => {},
  name: "title",
  rows: 8,
};
