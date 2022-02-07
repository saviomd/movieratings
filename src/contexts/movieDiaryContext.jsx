import PropTypes from "prop-types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";

import filterMoviesByName from "../helpers/filterMoviesByName";
import formatMovieList from "../helpers/formatMovieList";
import { fetchMovieDiary } from "../helpers/letterboxdServices";
import useMovieDiaryStore from "../hooks/useMovieDiaryStore";

const MovieDiaryContext = createContext();
const useMovieDiaryContext = () => useContext(MovieDiaryContext);

function MovieDiaryProvider({ children }) {
  const { boundActions, state } = useMovieDiaryStore();

  const movieDiaryFiltered = useMemo(
    () => filterMoviesByName(state.movieDiary, state.movieDiarySearchString),
    [state.movieDiary, state.movieDiarySearchString]
  );

  const movieDiaryPaginated = useMemo(() => {
    const size = state.movieDiaryPage * 100;
    return movieDiaryFiltered.slice(0, size);
  }, [movieDiaryFiltered, state.movieDiaryPage]);

  const moviesPerYearWatched = useMemo(() => {
    const groups = state.movieDiary.reduce((acc, curr) => {
      const year = curr.WatchedDate.split("-")[0];
      acc[year] = acc[year] ? (acc[year] += 1) : (acc[year] = 1);
      return acc;
    }, {});
    let max = 0;
    Object.values(groups).forEach((year) => {
      max = year > max ? year : max;
    });
    return { groups, max };
  }, [state.movieDiary]);

  const loadMovieDiary = useCallback(() => {
    boundActions.setMovieDiaryStatus("loading");
    return fetchMovieDiary()
      .then((json) => {
        const movieDiaryFormatted = formatMovieList(json);
        boundActions.setMovieDiary(movieDiaryFormatted);
        return movieDiaryFormatted;
      })
      .catch(() => {
        boundActions.setMovieDiaryStatus("error");
      });
  }, [boundActions]);

  useEffect(() => {
    loadMovieDiary();
  }, [loadMovieDiary]);

  const providerValue = useMemo(
    () => ({
      ...state,
      boundActions,
      movieDiaryFiltered,
      movieDiaryPaginated,
      moviesPerYearWatched,
    }),
    [
      boundActions,
      movieDiaryFiltered,
      movieDiaryPaginated,
      moviesPerYearWatched,
      state,
    ]
  );
  return (
    <MovieDiaryContext.Provider value={providerValue}>
      {children}
    </MovieDiaryContext.Provider>
  );
}

MovieDiaryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MovieDiaryProvider, useMovieDiaryContext };
