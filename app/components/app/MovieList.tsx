import { useMovieDiaryContext } from "~/contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "~/contexts/MovieRatingsContext";
import { LoadingHandler } from "~/components/library";
import type { MovieType } from "~/types";
import MovieButton from "./MovieButton";

interface IProps {
  type: MovieType;
}

function MovieList({ type }: IProps) {
  const {
    boundActions: { increaseMovieDiaryPage },
    movieDiaryFiltered,
    movieDiaryPaginated,
    movieDiaryStatus,
  } = useMovieDiaryContext();
  const {
    boundActions: { increaseMovieRatingsPage },
    movieRatingsFiltered,
    movieRatingsPaginated,
    movieRatingsStatus,
  } = useMovieRatingsContext();

  const data = {
    Diary: {
      increaseMoviesPage: increaseMovieDiaryPage,
      moviesFiltered: movieDiaryFiltered,
      moviesPaginated: movieDiaryPaginated,
      moviesStatus: movieDiaryStatus,
    },
    Ratings: {
      increaseMoviesPage: increaseMovieRatingsPage,
      moviesFiltered: movieRatingsFiltered,
      moviesPaginated: movieRatingsPaginated,
      moviesStatus: movieRatingsStatus,
    },
  };

  const { increaseMoviesPage, moviesFiltered, moviesPaginated, moviesStatus } =
    data[type];

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
              onClick={increaseMoviesPage}
            >
              Show more
            </button>
          </div>
        )}
      </>
    </LoadingHandler>
  );
}

export default MovieList;
