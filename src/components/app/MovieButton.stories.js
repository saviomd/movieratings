import MovieButton, { types } from "./MovieButton";
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
  argTypes: {
    type: {
      options: types,
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

export const Default = {
  args: {
    movie: movies[0],
    type: types[0],
  },
};
