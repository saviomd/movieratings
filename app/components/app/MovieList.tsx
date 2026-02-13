import { use } from "react";

import { DiaryContext } from "~/contexts/DiaryContext";
import { RatingsContext } from "~/contexts/RatingsContext";
import type { MovieType } from "~/types";
import MovieButton from "./MovieButton";

interface IProps {
  type: MovieType;
}

function MovieList({ type }: IProps) {
  let data;
  if (type === "Diary") {
    const {
      boundActions: { increaseMovieDiaryPage },
      movieDiaryFiltered,
      movieDiaryPaginated,
    } = use(DiaryContext);
    data = {
      increaseMoviesPage: increaseMovieDiaryPage,
      moviesFiltered: movieDiaryFiltered,
      moviesPaginated: movieDiaryPaginated,
    };
  } else {
    const {
      boundActions: { increaseMovieRatingsPage },
      movieRatingsFiltered,
      movieRatingsPaginated,
    } = use(RatingsContext);
    data = {
      increaseMoviesPage: increaseMovieRatingsPage,
      moviesFiltered: movieRatingsFiltered,
      moviesPaginated: movieRatingsPaginated,
    };
  }

  const { increaseMoviesPage, moviesFiltered, moviesPaginated } = data;

  return (
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
            onClick={increaseMoviesPage}
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
}

export default MovieList;
