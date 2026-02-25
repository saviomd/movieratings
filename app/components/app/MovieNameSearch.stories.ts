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
  argTypes: {
    movieListFiltered: { control: false },
  },
} satisfies Meta<typeof MovieNameSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    movieListFiltered: movieDiaryMock.slice(0, 10),
    movieListSearchString: "",
    setMovieListSearchString: fn(),
  },
};
