import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useReducer } from "react";

import movieDiaryContext from "../../contexts/movieDiaryContext";
import movieRatingsContext from "../../contexts/movieRatingsContext";

const initialState = {
  dispatchMovie: null,
  dispatchMovieType: "",
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
  const [state, dispatchMovieNameSearch] = useReducer(reducer, initialState);
  const {
    dispatchMovieDiary,
    movieDiaryFiltered,
    movieDiarySearchString,
    movieDiaryStatus,
  } = useContext(movieDiaryContext);
  const {
    dispatchMovieRatings,
    movieRatingsFiltered,
    movieRatingsSearchString,
    movieRatingsStatus,
  } = useContext(movieRatingsContext);

  useEffect(() => {
    let payload;
    if (type === "Diary") {
      payload = {
        dispatchMovie: dispatchMovieDiary,
        dispatchMovieType: "setMovieDiarySearchString",
        movieSearchString: movieDiarySearchString,
        moviesFiltered: movieDiaryFiltered,
      };
    } else if (type === "Ratings") {
      payload = {
        dispatchMovie: dispatchMovieRatings,
        dispatchMovieType: "setMovieRatingsSearchString",
        movieSearchString: movieRatingsSearchString,
        moviesFiltered: movieRatingsFiltered,
      };
    }
    dispatchMovieNameSearch({ type: "setAll", payload });
  }, [
    dispatchMovieDiary,
    dispatchMovieRatings,
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
            state.dispatchMovie({
              type: state.dispatchMovieType,
              payload: event.target.value,
            })
          }
        />
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() =>
            state.dispatchMovie({ type: state.dispatchMovieType, payload: "" })
          }
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
