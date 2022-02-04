import PropTypes from "prop-types";
import React, { memo } from "react";

import { useMovieDiaryContext } from "../../contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "../../contexts/MovieRatingsContext";
import LoadingHandler from "../LoadingHandler";
import MovieButton from "../MovieButton";

const MovieList = memo(({ type }) => {
  const {
    dispatcher: dispatcherMovieDiary,
    movieDiaryFiltered,
    movieDiaryPaginated,
    movieDiaryStatus,
  } = useMovieDiaryContext();
  const {
    dispatcher: dispatcherMovieRatings,
    movieRatingsFiltered,
    movieRatingsPaginated,
    movieRatingsStatus,
  } = useMovieRatingsContext();

  const {
    dispatcher,
    dispatcherName,
    moviesFiltered,
    moviesPaginated,
    moviesStatus,
  } = (() => {
    switch (type) {
      case "Diary":
        return {
          dispatcher: dispatcherMovieDiary,
          dispatcherName: "setMovieDiaryPage",
          moviesFiltered: movieDiaryFiltered,
          moviesPaginated: movieDiaryPaginated,
          moviesStatus: movieDiaryStatus,
        };
      case "Ratings":
        return {
          dispatcher: dispatcherMovieRatings,
          dispatcherName: "setMovieRatingsPage",
          moviesFiltered: movieRatingsFiltered,
          moviesPaginated: movieRatingsPaginated,
          moviesStatus: movieRatingsStatus,
        };
      default:
        throw new Error();
    }
  })();

  const handleShowMore = () => dispatcher[dispatcherName]();

  return (
    <LoadingHandler
      dataStatus={moviesStatus}
      hasData={!!moviesFiltered.length}
      messageNoData="noMovies"
    >
      <>
        <ul className="list-unstyled">
          {moviesPaginated.map((movie) => (
            <li className="mb-3" key={movie.Id}>
              <MovieButton movie={movie} type={type} />
            </li>
          ))}
        </ul>
        {moviesPaginated.length < moviesFiltered.length && (
          <div className="mb-3 text-center">
            <button
              className="btn btn-danger"
              type="button"
              onClick={handleShowMore}
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
