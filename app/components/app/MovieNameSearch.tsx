import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ChangeEvent } from "react";

import useMovieListStore from "~/stores/useMovieListStore";

interface IProps {
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
}: IProps) {
  const handleReset = () => {
    setMovieListSearchString("");
  };

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMovieListSearchString(target.value);
  };

  return (
    <div className="mb-3">
      <div className="input-group mb-1">
        <input
          id="search-movie"
          className="form-control"
          placeholder="Search..."
          type="text"
          value={movieListSearchString}
          onChange={handleSearch}
        />
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleReset}
        >
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
      <p className="small text-end">{movieListFiltered.length} movies</p>
    </div>
  );
}

export default MovieNameSearch;
