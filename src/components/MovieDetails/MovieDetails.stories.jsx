import React from "react";

import MovieDetails from "./MovieDetails";
import MovieDetailsContext from "../../contexts/MovieDetailsContext";
import formatMovieDetails from "../../helpers/formatMovieDetails";
import movieDetailsMock from "../../__mocks__/movieDetailsMock";

const movie = {
  Date: "2013-04-25",
  Name: "Batman",
  Year: 1989,
  LetterboxdURI: "https://boxd.it/2aIU",
  Rating: 5,
};

const value = {
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

const Template = (args) => (
  <MovieDetailsContext.Provider value={value}>
    <MovieDetails {...args} />
  </MovieDetailsContext.Provider>
);

export const Default = Template.bind({});
