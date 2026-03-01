import type { Meta, StoryObj } from "@storybook/react-vite";

import Heading, { levelKeys } from "./Heading";
import type { HeadingLevelType } from "./Heading";

const meta = {
  title: "library/Heading",
  component: Heading,
  argTypes: {
    level: {
      control: {
        max: levelKeys.at(-1),
        min: levelKeys[0],
        type: "range",
      },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum",
    level: levelKeys[0] as HeadingLevelType,
  },
};
