import type { Meta, StoryObj } from "@storybook/react-vite";

import { posterMoviesMock } from "~/__mocks__";

import MoviesWatchedCard from "./MoviesWatchedCard";

const meta = {
  title: "app/MoviesWatchedCard",
  component: MoviesWatchedCard,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    movies: { control: false },
  },
} satisfies Meta<typeof MoviesWatchedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movies: posterMoviesMock,
    status: "success",
    title: "Title",
  },
};
