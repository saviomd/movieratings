import type { Meta, StoryObj } from "@storybook/react-vite";

import Nav from "./Nav";

const meta = {
  title: "app/Nav",
  component: Nav,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
