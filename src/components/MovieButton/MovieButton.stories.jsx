import React from "react";

import MovieButton, { types } from "./MovieButton";
import movieDiaryMock from "../../__mocks__/movieDiaryMock";
import formatMovieList from "../../helpers/formatMovieList";

const movies = formatMovieList(movieDiaryMock.movieDiary);

export default {
  title: "Example/MovieButton",
  component: MovieButton,
  argTypes: {
    type: {
      options: types,
      control: {
        type: "select",
      },
    },
  },
};

function Template(args) {
  return <MovieButton {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  movie: movies[0],
  type: types[0],
};
