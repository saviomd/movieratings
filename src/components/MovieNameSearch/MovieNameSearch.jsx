import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect, useReducer } from "react";

import { useMovieDiaryContext } from "../../contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "../../contexts/MovieRatingsContext";

const initialState = {
  dispatcher: null,
  dispatcherName: "",
  movieSearchString: "",
  moviesFiltered: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setAll":
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

const MovieNameSearch = ({ type }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    dispatcher: dispatcherMovieDiary,
    movieDiaryFiltered,
    movieDiarySearchString,
    movieDiaryStatus,
  } = useMovieDiaryContext();
  const {
    dispatcher: dispatcherMovieRatings,
    movieRatingsFiltered,
    movieRatingsSearchString,
    movieRatingsStatus,
  } = useMovieRatingsContext();

  useEffect(() => {
    let payload;
    if (type === "Diary") {
      payload = {
        dispatcher: dispatcherMovieDiary,
        dispatcherName: "setMovieDiarySearchString",
        movieSearchString: movieDiarySearchString,
        moviesFiltered: movieDiaryFiltered,
      };
    } else if (type === "Ratings") {
      payload = {
        dispatcher: dispatcherMovieRatings,
        dispatcherName: "setMovieRatingsSearchString",
        movieSearchString: movieRatingsSearchString,
        moviesFiltered: movieRatingsFiltered,
      };
    }
    dispatch({ type: "setAll", payload });
  }, [
    dispatcherMovieDiary,
    dispatcherMovieRatings,
    movieDiaryFiltered,
    movieDiarySearchString,
    movieDiaryStatus,
    movieRatingsFiltered,
    movieRatingsSearchString,
    movieRatingsStatus,
    type,
  ]);

  return (
    <div className="mb-3">
      <div className="input-group mb-1">
        <input
          id="search-movie"
          className="form-control"
          placeholder="Search..."
          type="text"
          value={state.movieSearchString}
          onChange={(event) =>
            state.dispatcher[state.dispatcherName](event.target.value)
          }
        />
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => state.dispatcher[state.dispatcherName]("")}
        >
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
      <p className="small text-end">{state.moviesFiltered.length} movies</p>
    </div>
  );
};

MovieNameSearch.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MovieNameSearch;
