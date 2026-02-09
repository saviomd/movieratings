import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use } from "react";
import type { ChangeEvent } from "react";

import { DiaryContext } from "~/contexts/DiaryContext";
import { RatingsContext } from "~/contexts/RatingsContext";
import type { MovieType } from "~/types";

interface IProps {
  type: MovieType;
}

function MovieNameSearch({ type }: IProps) {
  let data;
  if (type === "Diary") {
    const {
      boundActions: { setMovieDiarySearchString },
      movieDiaryFiltered,
      movieDiarySearchString,
    } = use(DiaryContext);
    data = {
      movieSearchString: movieDiarySearchString,
      moviesFiltered: movieDiaryFiltered,
      setMovieSearchString: setMovieDiarySearchString,
    };
  } else {
    const {
      boundActions: { setMovieRatingsSearchString },
      movieRatingsFiltered,
      movieRatingsSearchString,
    } = use(RatingsContext);
    data = {
      movieSearchString: movieRatingsSearchString,
      moviesFiltered: movieRatingsFiltered,
      setMovieSearchString: setMovieRatingsSearchString,
    };
  }

  const { setMovieSearchString, movieSearchString, moviesFiltered } = data;

  const handleReset = () => {
    setMovieSearchString("");
  };

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMovieSearchString(target.value);
  };

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
