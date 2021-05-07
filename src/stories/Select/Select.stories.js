import React from "react";
import { Select } from "./index.js";

export default {
  title: "Example/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const UnitarySelect = Template.bind({});
UnitarySelect.args = {
  title: "Unitary select",
  options: ["First", "Second", "Third"],
  value: "First",
  onChange: () => {},
  name: "Unitary select",
};
