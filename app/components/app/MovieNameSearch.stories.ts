import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { movieDiaryMock } from "~/__mocks__";

import MovieNameSearch from "./MovieNameSearch";

const meta = {
  title: "app/MovieNameSearch",
  component: MovieNameSearch,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof MovieNameSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movieListFilteredCount: movieDiaryMock.length,
    movieListSearchString: "",
    setMovieListSearchString: fn(),
  },
};
