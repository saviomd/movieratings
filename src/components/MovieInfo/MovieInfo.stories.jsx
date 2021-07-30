import React from "react";

import MovieInfo from "./MovieInfo";
import MovieInfoContext from "../../contexts/movieInfoContext";
import movieInfoMock from "../../__mocks__/movieInfoMock";

export default {
  title: "Example/MovieInfo",
  component: MovieInfo,
};

const Template = (args) => (
  <MovieInfoContext.Provider
    value={{
      movieInfo: movieInfoMock.movieInfo,
      movieInfoStatus: movieInfoMock.movieInfoStatus,
    }}
  >
    <MovieInfo {...args} />
  </MovieInfoContext.Provider>
);

export const Default = Template.bind({});
