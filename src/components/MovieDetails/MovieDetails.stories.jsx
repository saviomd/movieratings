import React from "react";

import MovieDetails from "./MovieDetails";
import { MovieDetailsContextMock } from "../../contexts/MovieDetailsContext";
import formatMovieDetails from "../../helpers/formatMovieDetails";
import movieDetailsMock from "../../__mocks__/movieDetailsMock";

const movie = {
  Date: "2013-04-25",
  Name: "Batman",
  Year: 1989,
  LetterboxdURI: "https://boxd.it/2aIU",
  Rating: 5,
};

const providerValue = {
  movieDetails: formatMovieDetails({
    movie,
    movieDetails: movieDetailsMock,
  }),
  movieDetailsStatus: "loaded",
};

export default {
  title: "Example/MovieDetails",
  component: MovieDetails,
};

function Template(args) {
  return (
    <MovieDetailsContextMock.Provider value={providerValue}>
      <MovieDetails {...args} />
    </MovieDetailsContextMock.Provider>
  );
}

export const Default = Template.bind({});
