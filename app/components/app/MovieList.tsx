import { Button } from "~/components/library";
import useMovieListStore from "~/stores/useMovieListStore";
import type { MovieType } from "~/types";

import MovieButton from "./MovieButton";

interface Props {
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
}: Props) {
  return (
    <>
      <ul className="list-unstyled">
        {movieListPaginated.map((movie) => (
          <li className="mb-3" key={movie.id}>
            <MovieButton
              dateFormatted={movie.dateFormatted}
              id={movie.id}
              name={movie.name}
              rating={movie.rating}
              type={type}
              watchedDateFormatted={movie.watchedDateFormatted}
              year={movie.year}
            />
          </li>
        ))}
      </ul>
      {hasMorePages && (
        <div className="mb-3 text-center">
          <Button onClick={increaseMovieListPage}>Show more</Button>
        </div>
      )}
    </>
  );
}

export default MovieList;
