import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { movieDiaryMock } from "~/__mocks__";

import MovieList from "./MovieList";

const meta = {
  title: "app/MovieList",
  component: MovieList,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    movieListPaginated: { control: false },
  },
} satisfies Meta<typeof MovieList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movieListPaginated: movieDiaryMock.slice(0, 10),
    type: "Diary",
    hasMorePages: false,
    increaseMovieListPage: fn(),
  },
};
