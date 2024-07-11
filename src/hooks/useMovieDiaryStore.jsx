import { useQuery } from "@tanstack/react-query";
import { useMemo, useReducer } from "react";

import {
  fetchMovieDiary,
  filterMoviesByName,
  formatMovieList,
} from "src/utils";

const initialState = {
  movieDiaryPage: 1,
  movieDiarySearchString: "",
};

function reducer(state, { payload, type }) {
  switch (type) {
    case "SET_MOVIE_DIARY_PAGE":
      return { ...state, movieDiaryPage: state.movieDiaryPage + 1 };
    case "SET_MOVIE_DIARY_SEARCH_STRING":
      return { ...state, movieDiarySearchString: payload.toLowerCase() };
    default:
      throw new Error();
  }
}

const useMovieDetailsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const boundActions = useMemo(
    () => ({
      setMovieDiaryPage: () => dispatch({ type: "SET_MOVIE_DIARY_PAGE" }),
      setMovieDiarySearchString: (payload) =>
        dispatch({ type: "SET_MOVIE_DIARY_SEARCH_STRING", payload }),
    }),
    [],
  );

  const { data: movieDiary = [], status: movieDiaryStatus } = useQuery({
    queryKey: ["movieDiary"],
    queryFn: async () => {
      const movieList = await fetchMovieDiary();
      return formatMovieList({ movieList });
    },
  });

  const movieDiaryFiltered = useMemo(
    () =>
      filterMoviesByName({
        movieList: movieDiary,
        value: state.movieDiarySearchString,
      }),
    [movieDiary, state.movieDiarySearchString],
  );

  const movieDiaryPaginated = useMemo(() => {
    const size = state.movieDiaryPage * 100;
    return movieDiaryFiltered.slice(0, size);
  }, [movieDiaryFiltered, state.movieDiaryPage]);

  const moviesPerYearWatched = useMemo(() => {
    const groups = movieDiary.reduce((acc, curr) => {
      const year = curr.WatchedDate.split("-")[0];
      acc[year] = acc[year] ? (acc[year] += 1) : (acc[year] = 1);
      return acc;
    }, {});
    let max = 0;
    Object.values(groups).forEach((year) => {
      max = year > max ? year : max;
    });
    return { groups, max };
  }, [movieDiary]);

  return {
    ...state,
    boundActions,
    movieDiary,
    movieDiaryFiltered,
    movieDiaryPaginated,
    movieDiaryStatus,
    moviesPerYearWatched,
  };
};

export default useMovieDetailsStore;
