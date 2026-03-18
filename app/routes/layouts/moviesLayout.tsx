import { MovieList, MovieNameSearch } from "~/components/app";
import { Grid, Heading, PageMetadata } from "~/components/library";
import useMovieListStore from "~/stores/useMovieListStore";
import type { MovieType } from "~/types";
import { routePaths } from "~/utils";

interface Props {
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

export default function MovieLayout({ store, type }: Props) {
  const {
    boundActions: { increaseMovieListPage, setMovieListSearchString },
    hasMorePages,
    movieListCount,
    movieListFilteredCount,
    movieListPaginated,
    movieListSearchString,
  } = store;

  return (
    <>
      <PageMetadata
        description={`${movieListCount.toString()} movies ${descriptionMessage[type]}`}
        path={routePath[type]()}
        title={type}
      />
      <Heading level={1}>{type}</Heading>
      <Grid>
        <Grid.Col width={12} widthSm={4} widthLg={6}>
          <MovieNameSearch
            movieListFilteredCount={movieListFilteredCount}
            movieListSearchString={movieListSearchString}
            setMovieListSearchString={setMovieListSearchString}
          />
        </Grid.Col>
        <Grid.Col width={12} widthSm={8} widthLg={6}>
          <MovieList
            increaseMovieListPage={increaseMovieListPage}
            hasMorePages={hasMorePages}
            movieListPaginated={movieListPaginated}
            type={type}
          />
        </Grid.Col>
      </Grid>
    </>
  );
}
