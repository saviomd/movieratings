import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  movieDetailsBatman1989Mock,
  movieDetailsGattaca1997Mock,
  movieDetailsSe7en1995Mock,
  movieDetailsTheFastAndTheFurious2001Mock,
} from "~/__mocks__";

import MoviePosterButton from "./MoviePosterButton";

const posterUrlOptions = [
  movieDetailsBatman1989Mock,
  movieDetailsGattaca1997Mock,
  movieDetailsSe7en1995Mock,
  movieDetailsTheFastAndTheFurious2001Mock,
].map(({ images }) => images.posters[0].url);

const meta = {
  title: "app/MoviePosterButton",
  component: MoviePosterButton,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    posterUrl: { control: "select", options: posterUrlOptions },
  },
} satisfies Meta<typeof MoviePosterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    posterUrl: posterUrlOptions[0],
    title: "title",
  },
};
