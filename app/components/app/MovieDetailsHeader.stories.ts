import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  movieDetailsBatman1989Mock,
  movieDetailsGattaca1997Mock,
  movieDetailsSe7en1995Mock,
  movieDetailsTheFastAndTheFurious2001Mock,
} from "~/__mocks__";

import MovieDetailsHeader from "./MovieDetailsHeader";

const getArgs = (movieDetails: typeof movieDetailsBatman1989Mock) => {
  return {
    br_title: movieDetails.br_title,
    original_title: movieDetails.original_title,
    Rating: movieDetails.Rating,
    release_year: movieDetails.release_year,
    title: movieDetails.title,
    vote_average: movieDetails.vote_average,
    vote_count: movieDetails.vote_count,
  };
};

const meta = {
  title: "app/MovieDetailsHeader",
  component: MovieDetailsHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MovieDetailsHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Batman1989: Story = {
  args: getArgs(movieDetailsBatman1989Mock),
};

export const Gattaca1997: Story = {
  args: getArgs(movieDetailsGattaca1997Mock),
};

export const Se7en1995: Story = {
  args: getArgs(movieDetailsSe7en1995Mock),
};

export const TheFastAndTheFurious2001: Story = {
  args: getArgs(movieDetailsTheFastAndTheFurious2001Mock),
};
