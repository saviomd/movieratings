import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

import { useMovieDiaryContext } from "src/contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "src/contexts/MovieRatingsContext";

function MovieNameSearch({ type }) {
  const {
    boundActions: boundActionsMovieDiary,
    movieDiaryFiltered,
    movieDiarySearchString,
  } = useMovieDiaryContext();
  const {
    boundActions: boundActionsMovieRatings,
    movieRatingsFiltered,
    movieRatingsSearchString,
  } = useMovieRatingsContext();

  const { boundActions, boundActionsName, movieSearchString, moviesFiltered } =
    (() => {
      switch (type) {
        case "Diary":
          return {
            boundActions: boundActionsMovieDiary,
            boundActionsName: "setMovieDiarySearchString",
            movieSearchString: movieDiarySearchString,
            moviesFiltered: movieDiaryFiltered,
          };
        case "Ratings":
          return {
            boundActions: boundActionsMovieRatings,
            boundActionsName: "setMovieRatingsSearchString",
            movieSearchString: movieRatingsSearchString,
            moviesFiltered: movieRatingsFiltered,
          };
        default:
          throw new Error();
      }
    })();

  const handleReset = () => boundActions[boundActionsName]("");

  const handleSearch = ({ target }) =>
    boundActions[boundActionsName](target.value);

  return (
    <div className="mb-3">
      <div className="input-group mb-1">
        <input
          id="search-movie"
          className="form-control"
          placeholder="Search..."
          type="text"
          value={movieSearchString}
          onChange={handleSearch}
        />
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleReset}
        >
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
      <p className="small text-end">{moviesFiltered.length} movies</p>
    </div>
  );
}

MovieNameSearch.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MovieNameSearch;
