import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProgressBar from "./ProgressBar";

export default {
  title: "library/ProgressBar",
  component: ProgressBar,
  argTypes: {
    size: {
      control: {
        type: "range",
      },
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 50,
};
