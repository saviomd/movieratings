import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  movieDetailsBatman1989Mock,
  movieDetailsGattaca1997Mock,
  movieDetailsSe7en1995Mock,
  movieDetailsTheFastAndTheFurious2001Mock,
} from "~/__mocks__";

import MovieDetailsInfo from "./MovieDetailsInfo";

const getArgs = (movieDetails: typeof movieDetailsBatman1989Mock) => {
  return {
    budget: movieDetails.budget,
    flatrate: movieDetails.flatrate,
    genres: movieDetails.genres,
    overview: movieDetails.overview,
    posters: movieDetails.images.posters,
    production_companies: movieDetails.production_companies,
    production_countries: movieDetails.production_countries,
    release_date: movieDetails.release_date,
    revenue: movieDetails.revenue,
    runtime: movieDetails.runtime,
    spoken_languages: movieDetails.spoken_languages,
    title: movieDetails.title,
  };
};

const meta = {
  title: "app/MovieDetailsInfo",
  component: MovieDetailsInfo,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    flatrate: { control: false },
    genres: { control: false },
    posters: { control: false },
    production_companies: { control: false },
    production_countries: { control: false },
    spoken_languages: { control: false },
  },
} satisfies Meta<typeof MovieDetailsInfo>;

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
