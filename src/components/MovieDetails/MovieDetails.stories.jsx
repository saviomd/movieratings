import React from "react";

import MovieDetails from "./MovieDetails";
import MovieDetailsContext from "../../contexts/movieDetailsContext";
import movieDetailsMock from "../../__mocks__/movieDetailsMock";

export default {
  title: "Example/MovieDetails",
  component: MovieDetails,
};

const Template = (args) => (
  <MovieDetailsContext.Provider
    value={{
      movieDetails: movieDetailsMock.movieDetails,
      movieDetailsStatus: movieDetailsMock.movieDetailsStatus,
    }}
  >
    <MovieDetails {...args} />
  </MovieDetailsContext.Provider>
);

export const Default = Template.bind({});
