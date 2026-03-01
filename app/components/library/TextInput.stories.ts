import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import TextInput from "./TextInput";

const meta = {
  title: "library/TextInput",
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id",
    onChange: fn(),
    placeholder: "placeholder",
    value: "value",
  },
};
