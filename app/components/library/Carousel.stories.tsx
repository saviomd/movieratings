import type { Meta, StoryObj } from "@storybook/react-vite";

import { Grid } from "~/components/library";
import Carousel from "./Carousel";

const meta = {
  title: "library/Carousel",
  component: Carousel,
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 10 }).map((_, i) => (
          <Grid.Col key={i} width={3}>
            <div className="py-3">Lorem ipsum dolor sit amet</div>
          </Grid.Col>
        ))}
      </>
    ),
  },
};
