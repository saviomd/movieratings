import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ChangeEvent } from "react";

import { useMovieDiaryContext } from "src/contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "src/contexts/MovieRatingsContext";
import type { MovieType } from "src/types";

type PropsType = {
  type: MovieType;
};

function MovieNameSearch({ type }: PropsType) {
  const {
    boundActions: { setMovieDiarySearchString },
    movieDiaryFiltered,
    movieDiarySearchString,
  } = useMovieDiaryContext();
  const {
    boundActions: { setMovieRatingsSearchString },
    movieRatingsFiltered,
    movieRatingsSearchString,
  } = useMovieRatingsContext();

  const { setMovieSearchString, movieSearchString, moviesFiltered } = (() => {
    switch (type) {
      case "Diary":
        return {
          movieSearchString: movieDiarySearchString,
          moviesFiltered: movieDiaryFiltered,
          setMovieSearchString: setMovieDiarySearchString,
        };
      case "Ratings":
        return {
          movieSearchString: movieRatingsSearchString,
          moviesFiltered: movieRatingsFiltered,
          setMovieSearchString: setMovieRatingsSearchString,
        };
      default:
        throw new Error();
    }
  })();

  const handleReset = () => setMovieSearchString("");

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setMovieSearchString(target.value);

  return (
    <div className="mb-3">
      <div className="input-group mb-1">
        <input
          id="search-movie"
          className="form-control"
          placeholder="Search..."
          type="text"
          value={movieSearchString}
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
      <p className="small text-end">{moviesFiltered.length} movies</p>
    </div>
  );
}

export default MovieNameSearch;
