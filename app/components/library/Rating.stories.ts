import type { Meta, StoryObj } from "@storybook/react-vite";

import Rating from "./Rating";

const meta = {
  title: "library/Rating",
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 4,
  },
};
