import type { Meta, StoryObj } from "@storybook/react";
import type { QueryStatus } from "@tanstack/react-query";

import MovieDetails from "./MovieDetails";
import { MovieDetailsContextMock } from "src/contexts/MovieDetailsContext";
import type { IMovieDetails } from "src/types";
import { formatMovieDetails, formatMovieList } from "src/utils";
import movieDetailsMock from "src/__mocks__/movieDetailsMock";

const movie = formatMovieList({
  movieList: [
    {
      Date: "2013-04-25",
      Name: "Batman",
      Year: 1989,
      LetterboxdURI: "https://boxd.it/2aIU",
      Rating: 5,
    },
  ],
})[0];

const providerValue = {
  movieDetails: formatMovieDetails({
    movie,
    movieDetails: movieDetailsMock as unknown as IMovieDetails,
  }),
  movieDetailsStatus: "success" as QueryStatus,
};

const meta = {
  title: "app/MovieDetails",
  component: MovieDetails,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MovieDetailsContextMock.Provider value={providerValue}>
        <Story />
      </MovieDetailsContextMock.Provider>
    ),
  ],
} satisfies Meta<typeof MovieDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
