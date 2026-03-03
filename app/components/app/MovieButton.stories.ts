import type { Meta, StoryObj } from "@storybook/react-vite";

import MovieButton from "./MovieButton";
import { movieDiaryMock } from "~/__mocks__";
import type { IMovieLoggedFormatted, MovieType } from "~/types";

const getArgs = (movie: IMovieLoggedFormatted) => ({
  dateFormatted: movie.dateFormatted,
  id: movie.id,
  name: movie.name,
  rating: movie.rating,
  type: "Diary" as MovieType,
  watchedDateFormatted: movie.watchedDateFormatted,
  year: movie.year,
});

const meta = {
  title: "app/MovieButton",
  component: MovieButton,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MovieButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Movie1: Story = {
  args: getArgs(movieDiaryMock[0]),
};

export const Movie2: Story = {
  args: getArgs(movieDiaryMock[1]),
};

export const Movie3: Story = {
  args: getArgs(movieDiaryMock[2]),
};

export const Movie4: Story = {
  args: getArgs(movieDiaryMock[3]),
};
