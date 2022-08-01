import React from "react";

import ProgressBar from "./ProgressBar";

export default {
  title: "library/ProgressBar",
  component: ProgressBar,
  argTypes: {
    width: {
      control: {
        type: "range",
      },
    },
  },
};

function Template(args) {
  return <ProgressBar {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  width: 50,
};
