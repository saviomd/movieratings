import type { Meta, StoryObj } from "@storybook/react-vite";

import Badge from "./Badge";

const meta = {
  title: "library/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum",
  },
};
