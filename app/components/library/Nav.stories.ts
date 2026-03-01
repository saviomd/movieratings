import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";

import Nav from "./Nav";

const item1 = {
  icon: "star",
  name: "Lorem",
  path: "#",
};

const item2 = {
  icon: "calendar-alt",
  name: "Ipsum",
  path: "/2",
};

const item3 = {
  icon: "chart-simple",
  name: "Dolor",
  path: "/3",
};

const item4 = {
  icon: "hourglass-half",
  name: "Sit",
  path: "/4",
};

const items1 = [item1];
const items2 = [...items1, item2];
const items3 = [...items2, item3];
const items4 = [...items3, item4];

const itemsOptions = {
  1: items1,
  2: items2,
  3: items3,
  4: items4,
};

const meta = {
  title: "library/Nav",
  component: Nav,
  argTypes: {
    items: {
      control: "select",
      mapping: itemsOptions,
      options: Object.keys(itemsOptions),
    },
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: itemsOptions[4] as ComponentProps<typeof Nav>["items"],
  },
};
