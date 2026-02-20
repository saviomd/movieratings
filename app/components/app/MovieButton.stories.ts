import type { Meta, StoryObj } from "@storybook/react-vite";

import MovieButton from "./MovieButton";
import movieDiaryMock from "~/__mocks__/movieDiaryMock";
import { formatMovieLogged } from "~/utils";

const movie = formatMovieLogged({ movieLogged: movieDiaryMock.movieDiary[0] });

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
    movie,
    type: "Diary",
  },
};
