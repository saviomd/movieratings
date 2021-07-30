import React from "react";

import ProgressBar from "./ProgressBar";

export default {
  title: "Example/ProgressBar",
  component: ProgressBar,
  argTypes: {
    width: {
      control: {
        type: "range",
      },
    },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 50,
};
