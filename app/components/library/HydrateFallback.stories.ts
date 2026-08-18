import type { Meta, StoryObj } from "@storybook/react-vite";

import HydrateFallback from "./HydrateFallback";

const meta = {
  title: "library/HydrateFallback",
  component: HydrateFallback,
} satisfies Meta<typeof HydrateFallback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
