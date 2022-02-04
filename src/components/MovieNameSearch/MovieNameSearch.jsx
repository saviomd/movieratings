import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

import { useMovieDiaryContext } from "../../contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "../../contexts/MovieRatingsContext";

const MovieNameSearch = ({ type }) => {
  const {
    dispatcher: dispatcherMovieDiary,
    movieDiaryFiltered,
    movieDiarySearchString,
  } = useMovieDiaryContext();
  const {
    dispatcher: dispatcherMovieRatings,
    movieRatingsFiltered,
    movieRatingsSearchString,
  } = useMovieRatingsContext();

  const { dispatcher, dispatcherName, movieSearchString, moviesFiltered } =
    (() => {
      switch (type) {
        case "Diary":
          return {
            dispatcher: dispatcherMovieDiary,
            dispatcherName: "setMovieDiarySearchString",
            movieSearchString: movieDiarySearchString,
            moviesFiltered: movieDiaryFiltered,
          };
        case "Ratings":
          return {
            dispatcher: dispatcherMovieRatings,
            dispatcherName: "setMovieRatingsSearchString",
            movieSearchString: movieRatingsSearchString,
            moviesFiltered: movieRatingsFiltered,
          };
        default:
          throw new Error();
      }
    })();

  const handleReset = () => dispatcher[dispatcherName]("");

  const handleSearch = ({ target }) => dispatcher[dispatcherName](target.value);

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
};

MovieNameSearch.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MovieNameSearch;
