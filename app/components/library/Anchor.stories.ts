import type { Meta, StoryObj } from "@storybook/react-vite";

import Anchor from "./Anchor";

const meta = {
  title: "library/Anchor",
  component: Anchor,
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet",
    href: "#",
  },
};
