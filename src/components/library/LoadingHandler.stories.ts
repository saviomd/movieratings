import type { Meta, StoryObj } from "@storybook/react";

import LoadingHandler, { dataStatuses } from "./LoadingHandler";

const meta = {
  title: "library/LoadingHandler",
  component: LoadingHandler,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    dataStatus: {
      options: dataStatuses,
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof LoadingHandler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis, deleniti exercitationem omnis natus debitis ducimus similique non sint incidunt soluta aspernatur corporis animi rem pariatur itaque quod facere repellat.",
    dataStatus: "loaded",
    hasData: true,
    messageNoData: "noData",
  },
};
