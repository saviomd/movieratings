import { useMemo, useReducer } from "react";

import { filterMoviesByName, formatMovieList } from "../utils";

const initialState = {
  movieDiary: [],
  movieDiaryPage: 1,
  movieDiarySearchString: "",
  movieDiaryStatus: "",
};

function reducer(state, { payload, type }) {
  switch (type) {
    case "SET_MOVIE_DIARY":
      return {
        ...state,
        movieDiary: formatMovieList(payload),
        movieDiaryStatus: "loaded",
      };
    case "SET_MOVIE_DIARY_PAGE":
      return { ...state, movieDiaryPage: state.movieDiaryPage + 1 };
    case "SET_MOVIE_DIARY_SEARCH_STRING":
      return { ...state, movieDiarySearchString: payload.toLowerCase() };
    case "SET_MOVIE_DIARY_STATUS":
      return { ...state, movieDiaryStatus: payload };
    default:
      throw new Error();
  }
}

const useMovieDetailsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const boundActions = useMemo(
    () => ({
      setMovieDiary: (payload) =>
        dispatch({ type: "SET_MOVIE_DIARY", payload }),
      setMovieDiaryPage: () => dispatch({ type: "SET_MOVIE_DIARY_PAGE" }),
      setMovieDiarySearchString: (payload) =>
        dispatch({ type: "SET_MOVIE_DIARY_SEARCH_STRING", payload }),
      setMovieDiaryStatus: (payload) =>
        dispatch({ type: "SET_MOVIE_DIARY_STATUS", payload }),
    }),
    []
  );

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

  return {
    ...state,
    boundActions,
    movieDiaryFiltered,
    movieDiaryPaginated,
    moviesPerYearWatched,
  };
};

export default useMovieDetailsStore;
