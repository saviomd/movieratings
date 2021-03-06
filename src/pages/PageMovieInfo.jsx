import PropTypes from "prop-types";
import React, { useContext } from "react";

import { MovieInfoStore } from "../contexts/movieInfoContext";
import movieDiaryContext from "../contexts/movieDiaryContext";
import movieRatingsContext from "../contexts/movieRatingsContext";
import MovieInfo from "../components/MovieInfo";

const PageMovieInfo = ({ match }) => {
  const { movieDiary } = useContext(movieDiaryContext);
  const { movieRatings } = useContext(movieRatingsContext);
  const { movieId } = match.params;
  const movie = [...movieDiary, ...movieRatings].find(
    (obj) => obj.Id === movieId
  );
  return (
    <MovieInfoStore movie={movie}>
      <MovieInfo />
    </MovieInfoStore>
  );
};

PageMovieInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PageMovieInfo;
