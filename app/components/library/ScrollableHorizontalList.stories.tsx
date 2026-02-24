import type { Meta, StoryObj } from "@storybook/react-vite";

import ScrollableHorizontalList from "./ScrollableHorizontalList";

const meta = {
  title: "library/ScrollableHorizontalList",
  component: ScrollableHorizontalList,
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof ScrollableHorizontalList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="col-3 py-3">
            Lorem ipsum dolor sit amet
          </div>
        ))}
      </>
    ),
  },
};
