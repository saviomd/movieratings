import PropTypes from "prop-types";
import React, { memo, useEffect, useReducer } from "react";

import { useMovieDiaryContext } from "../../contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "../../contexts/MovieRatingsContext";
import LoadingHandler from "../LoadingHandler";
import MovieButton from "../MovieButton";

const initialState = {
  dispatcher: null,
  dispatcherName: "",
  moviesFiltered: [],
  moviesPaginated: [],
  moviesStatus: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "setAll":
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

const MovieList = memo(({ type }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    dispatcher: dispatcherMovieDiary,
    movieDiaryFiltered,
    movieDiaryPage,
    movieDiaryPaginated,
    movieDiarySearchString,
    movieDiaryStatus,
  } = useMovieDiaryContext();
  const {
    dispatcher: dispatcherMovieRatings,
    movieRatingsFiltered,
    movieRatingsPage,
    movieRatingsPaginated,
    movieRatingsSearchString,
    movieRatingsStatus,
  } = useMovieRatingsContext();

  useEffect(() => {
    let payload;
    if (type === "Diary") {
      payload = {
        dispatcher: dispatcherMovieDiary,
        dispatcherName: "setMovieDiaryPage",
        moviesFiltered: movieDiaryFiltered,
        moviesPaginated: movieDiaryPaginated,
        moviesStatus: movieDiaryStatus,
      };
    } else if (type === "Ratings") {
      payload = {
        dispatcher: dispatcherMovieRatings,
        dispatcherName: "setMovieRatingsPage",
        moviesFiltered: movieRatingsFiltered,
        moviesPaginated: movieRatingsPaginated,
        moviesStatus: movieRatingsStatus,
      };
    }
    dispatch({ type: "setAll", payload });
  }, [
    dispatcherMovieDiary,
    dispatcherMovieRatings,
    movieDiaryFiltered,
    movieDiaryPage,
    movieDiaryPaginated,
    movieDiarySearchString,
    movieDiaryStatus,
    movieRatingsFiltered,
    movieRatingsPage,
    movieRatingsPaginated,
    movieRatingsSearchString,
    movieRatingsStatus,
    type,
  ]);

  return (
    <LoadingHandler
      dataStatus={state.moviesStatus}
      hasData={!!state.moviesFiltered.length}
      messageNoData="noMovies"
    >
      <>
        <ul className="list-unstyled">
          {state.moviesPaginated.map((movie) => (
            <li className="mb-3" key={movie.Id}>
              <MovieButton movie={movie} type={type} />
            </li>
          ))}
        </ul>
        {state.moviesPaginated.length < state.moviesFiltered.length && (
          <div className="mb-3 text-center">
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => state.dispatcher[state.dispatcherName]()}
            >
              Show more
            </button>
          </div>
        )}
      </>
    </LoadingHandler>
  );
});

MovieList.propTypes = {
  type: PropTypes.oneOf(["Diary", "Ratings"]).isRequired,
};

export default MovieList;
