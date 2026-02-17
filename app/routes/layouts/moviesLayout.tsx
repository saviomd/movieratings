import { MovieList, MovieNameSearch } from "~/components/app";
import useMovieListStore from "~/stores/useMovieListStore";
import type { MovieType } from "~/types";

interface IProps {
  store: ReturnType<typeof useMovieListStore>;
  type: MovieType;
}

export default function MovieLayout({ store, type }: IProps) {
  const {
    boundActions: { increaseMovieListPage, setMovieListSearchString },
    hasMorePages,
    movieListFiltered,
    movieListPaginated,
    movieListSearchString,
  } = store;

  return (
    <>
      <h1 className="h4">{type}</h1>
      <div className="row">
        <div className="col-12 col-sm-4 col-lg-6">
          <MovieNameSearch
            movieListFiltered={movieListFiltered}
            movieListSearchString={movieListSearchString}
            setMovieListSearchString={setMovieListSearchString}
          />
        </div>
        <div className="col-12 col-sm-8 col-lg-6">
          <MovieList
            increaseMovieListPage={increaseMovieListPage}
            hasMorePages={hasMorePages}
            movieListPaginated={movieListPaginated}
            type={type}
          />
        </div>
      </div>
    </>
  );
}
