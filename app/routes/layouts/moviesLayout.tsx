import { MovieList, MovieNameSearch } from "~/components/app";
import { PageMetadata } from "~/components/library";
import useMovieListStore from "~/stores/useMovieListStore";
import type { MovieType } from "~/types";
import { routePaths } from "~/utils";

interface IProps {
  store: ReturnType<typeof useMovieListStore>;
  type: MovieType;
}

const descriptionMessage = {
  Diary: "added to diary",
  Ratings: "logged and rated",
};

const routePath = {
  Diary: routePaths.diary,
  Ratings: routePaths.ratings,
};

export default function MovieLayout({ store, type }: IProps) {
  const {
    boundActions: { increaseMovieListPage, setMovieListSearchString },
    hasMorePages,
    movieList,
    movieListFiltered,
    movieListPaginated,
    movieListSearchString,
  } = store;

  return (
    <>
      <PageMetadata
        description={`${movieList.length.toString()} movies ${descriptionMessage[type]}`}
        path={routePath[type]()}
        title={type}
      />
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
