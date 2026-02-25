import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  movieDetailsBatman1989Mock,
  movieDetailsGattaca1997Mock,
  movieDetailsSe7en1995Mock,
  movieDetailsTheFastAndTheFurious2001Mock,
} from "~/__mocks__";

import MovieDetailsBackdrops from "./MovieDetailsBackdrops";

const getArgs = (movieDetails: typeof movieDetailsBatman1989Mock) => {
  return {
    backdrops: movieDetails.images.backdrops,
    tagline: movieDetails.tagline,
    title: movieDetails.title,
  };
};

const meta = {
  title: "app/MovieDetailsBackdrops",
  component: MovieDetailsBackdrops,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    backdrops: { control: false },
  },
} satisfies Meta<typeof MovieDetailsBackdrops>;

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
