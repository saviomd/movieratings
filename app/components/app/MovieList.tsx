import useMovieListStore from "~/stores/useMovieListStore";
import type { MovieType } from "~/types";

import MovieButton from "./MovieButton";

interface IProps {
  increaseMovieListPage: ReturnType<
    typeof useMovieListStore
  >["boundActions"]["increaseMovieListPage"];
  hasMorePages: ReturnType<typeof useMovieListStore>["hasMorePages"];
  movieListPaginated: ReturnType<
    typeof useMovieListStore
  >["movieListPaginated"];
  type: MovieType;
}

function MovieList({
  increaseMovieListPage,
  hasMorePages,
  movieListPaginated,
  type,
}: IProps) {
  return (
    <>
      <ul className="list-unstyled">
        {movieListPaginated.map((movie) => (
          <li className="mb-3" key={movie.Id}>
            <MovieButton movie={movie} type={type} />
          </li>
        ))}
      </ul>
      {hasMorePages && (
        <div className="mb-3 text-center">
          <button
            className="btn btn-danger"
            type="button"
            onClick={increaseMovieListPage}
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
}

export default MovieList;
