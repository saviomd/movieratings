import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ChangeEvent } from "react";

import { Button, TextInput } from "~/components/library";
import useMovieListStore from "~/stores/useMovieListStore";

interface Props {
  movieListFiltered: ReturnType<typeof useMovieListStore>["movieListFiltered"];
  movieListSearchString: ReturnType<
    typeof useMovieListStore
  >["movieListSearchString"];
  setMovieListSearchString: ReturnType<
    typeof useMovieListStore
  >["boundActions"]["setMovieListSearchString"];
}

function MovieNameSearch({
  movieListFiltered,
  movieListSearchString,
  setMovieListSearchString,
}: Props) {
  const handleReset = () => {
    setMovieListSearchString("");
  };

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMovieListSearchString(target.value);
  };

  return (
    <div className="mb-3">
      <div className="input-group mb-1">
        <TextInput
          id="search-movie"
          onChange={handleSearch}
          placeholder="Search..."
          value={movieListSearchString}
        />
        <Button onClick={handleReset} variant="secondary">
          <FontAwesomeIcon icon="times" />
        </Button>
      </div>
      <p className="small text-end">{movieListFiltered.length} movies</p>
    </div>
  );
}

export default MovieNameSearch;
