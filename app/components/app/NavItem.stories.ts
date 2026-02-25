import type { Meta, StoryObj } from "@storybook/react-vite";

import NavItem from "./NavItem";

const meta = {
  title: "app/NavItem",
  component: NavItem,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    link: { control: false },
  },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    link: {
      icon: "star",
      name: "Ratings",
      path: "#",
    },
  },
};
