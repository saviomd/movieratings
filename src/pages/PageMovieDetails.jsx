import PropTypes from "prop-types";
import React from "react";

import { MovieDetailsProvider } from "../contexts/MovieDetailsContext";
import { useMovieDiary } from "../contexts/MovieDiaryContext";
import { useMovieRatings } from "../contexts/MovieRatingsContext";
import MovieDetails from "../components/MovieDetails";

const PageMovieDetails = ({ match }) => {
  const { movieDiary } = useMovieDiary();
  const { movieRatings } = useMovieRatings();
  const { movieId } = match.params;
  const movie = [...movieDiary, ...movieRatings].find(
    (obj) => obj.Id === movieId
  );
  return (
    <MovieDetailsProvider movie={movie}>
      <MovieDetails />
    </MovieDetailsProvider>
  );
};

PageMovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PageMovieDetails;
