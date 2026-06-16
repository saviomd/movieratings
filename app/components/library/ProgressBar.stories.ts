import type { Meta, StoryObj } from "@storybook/react-vite";

import ProgressBar from "./ProgressBar";

const meta = {
  title: "library/ProgressBar",
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    total: 100,
    value: 50,
  },
};
