import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "./Card";

const meta = {
  title: "library/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis, deleniti exercitationem omnis natus debitis ducimus similique non sint incidunt soluta aspernatur corporis animi rem pariatur itaque quod facere repellat.",
    title: "Title",
  },
};
