import type { Meta, StoryObj } from "@storybook/react-vite";

import Message from "./Message";

const meta = {
  title: "library/Message",
  component: Message,
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "error",
  },
};
