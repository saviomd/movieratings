import type { Meta, StoryObj } from "@storybook/react-vite";

import { randomMoviesMock } from "~/__mocks__";

import RandomMovies from "./RandomMovies";

const meta = {
  title: "app/RandomMovies",
  component: RandomMovies,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    randomMovies: { control: false },
  },
} satisfies Meta<typeof RandomMovies>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    randomMovies: randomMoviesMock,
    randomMoviesStatus: "success",
  },
};
