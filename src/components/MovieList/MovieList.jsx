import PropTypes from "prop-types";
import React, { memo, useContext, useEffect, useReducer } from "react";

import MovieDiaryContext from "../../contexts/MovieDiaryContext";
import MovieRatingsContext from "../../contexts/MovieRatingsContext";
import LoadingHandler from "../LoadingHandler";
import MovieButton from "../MovieButton";

const initialState = {
  dispatchMovie: null,
  dispatchMovieType: "",
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
  const [state, dispatchMovieList] = useReducer(reducer, initialState);
  const {
    dispatchMovieDiary,
    movieDiaryFiltered,
    movieDiaryPage,
    movieDiaryPaginated,
    movieDiarySearchString,
    movieDiaryStatus,
  } = useContext(MovieDiaryContext);
  const {
    dispatchMovieRatings,
    movieRatingsFiltered,
    movieRatingsPage,
    movieRatingsPaginated,
    movieRatingsSearchString,
    movieRatingsStatus,
  } = useContext(MovieRatingsContext);

  useEffect(() => {
    let payload;
    if (type === "Diary") {
      payload = {
        dispatchMovie: dispatchMovieDiary,
        dispatchMovieType: "setMovieDiaryPage",
        moviesFiltered: movieDiaryFiltered,
        moviesPaginated: movieDiaryPaginated,
        moviesStatus: movieDiaryStatus,
      };
    } else if (type === "Ratings") {
      payload = {
        dispatchMovie: dispatchMovieRatings,
        dispatchMovieType: "setMovieRatingsPage",
        moviesFiltered: movieRatingsFiltered,
        moviesPaginated: movieRatingsPaginated,
        moviesStatus: movieRatingsStatus,
      };
    }
    dispatchMovieList({ type: "setAll", payload });
  }, [
    dispatchMovieDiary,
    dispatchMovieRatings,
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
              onClick={() =>
                state.dispatchMovie({ type: state.dispatchMovieType })
              }
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
