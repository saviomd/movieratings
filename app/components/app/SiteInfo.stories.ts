import type { Meta, StoryObj } from "@storybook/react-vite";

import SiteInfo from "./SiteInfo";

const meta = {
  title: "app/SiteInfo",
  component: SiteInfo,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SiteInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
