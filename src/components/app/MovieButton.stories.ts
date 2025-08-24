import type { Meta, StoryObj } from "@storybook/react-vite";

import MovieButton from "./MovieButton";
import movieDiaryMock from "src/__mocks__/movieDiaryMock";
import { formatMovieList } from "src/utils";

const movies = formatMovieList({ movieList: movieDiaryMock.movieDiary });

const meta = {
  title: "app/MovieButton",
  component: MovieButton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MovieButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movie: movies[0],
    type: "Diary",
  },
};
