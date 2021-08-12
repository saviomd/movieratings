import PropTypes from "prop-types";
import React, { useContext } from "react";

import { MovieDetailsStore } from "../contexts/movieDetailsContext";
import movieDiaryContext from "../contexts/movieDiaryContext";
import movieRatingsContext from "../contexts/movieRatingsContext";
import MovieDetails from "../components/MovieDetails";

const PageMovieDetails = ({ match }) => {
  const { movieDiary } = useContext(movieDiaryContext);
  const { movieRatings } = useContext(movieRatingsContext);
  const { movieId } = match.params;
  const movie = [...movieDiary, ...movieRatings].find(
    (obj) => obj.Id === movieId
  );
  return (
    <MovieDetailsStore movie={movie}>
      <MovieDetails />
    </MovieDetailsStore>
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
