import { ComponentStory, ComponentMeta } from "@storybook/react";

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
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  width: 50,
};
