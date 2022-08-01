import PropTypes from "prop-types";
import React, { memo } from "react";

import { useMovieDiaryContext } from "../../contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "../../contexts/MovieRatingsContext";
import { LoadingHandler } from "../library";
import MovieButton from "./MovieButton";

const MovieList = memo(({ type }) => {
  const {
    boundActions: boundActionsMovieDiary,
    movieDiaryFiltered,
    movieDiaryPaginated,
    movieDiaryStatus,
  } = useMovieDiaryContext();
  const {
    boundActions: boundActionsMovieRatings,
    movieRatingsFiltered,
    movieRatingsPaginated,
    movieRatingsStatus,
  } = useMovieRatingsContext();

  const {
    boundActions,
    boundActionsName,
    moviesFiltered,
    moviesPaginated,
    moviesStatus,
  } = (() => {
    switch (type) {
      case "Diary":
        return {
          boundActions: boundActionsMovieDiary,
          boundActionsName: "setMovieDiaryPage",
          moviesFiltered: movieDiaryFiltered,
          moviesPaginated: movieDiaryPaginated,
          moviesStatus: movieDiaryStatus,
        };
      case "Ratings":
        return {
          boundActions: boundActionsMovieRatings,
          boundActionsName: "setMovieRatingsPage",
          moviesFiltered: movieRatingsFiltered,
          moviesPaginated: movieRatingsPaginated,
          moviesStatus: movieRatingsStatus,
        };
      default:
        throw new Error();
    }
  })();

  const handleShowMore = () => boundActions[boundActionsName]();

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
