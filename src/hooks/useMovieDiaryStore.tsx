import { useQuery } from "@tanstack/react-query";
import { useMemo, useReducer } from "react";

import {
  filterMoviesByName,
  formatMovieList,
  letterboxdServices,
} from "src/utils";

interface IState {
  movieDiaryPage: number;
  movieDiarySearchString: string;
}

type ActionType =
  | { type: "INCREASE_MOVIE_DIARY_PAGE" }
  | { type: "SET_MOVIE_DIARY_SEARCH_STRING"; payload: string };

interface IYearGroup {
  [key: string]: number;
}

const { fetchMovieDiary } = letterboxdServices;

const initialState: IState = {
  movieDiaryPage: 1,
  movieDiarySearchString: "",
};

function reducer(state: IState, action: ActionType) {
  switch (action.type) {
    case "INCREASE_MOVIE_DIARY_PAGE":
      return { ...state, movieDiaryPage: state.movieDiaryPage + 1 };
    case "SET_MOVIE_DIARY_SEARCH_STRING":
      return { ...state, movieDiarySearchString: action.payload.toLowerCase() };
    default:
      throw new Error();
  }
}

const useMovieDetailsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const boundActions = useMemo(
    () => ({
      increaseMovieDiaryPage: () =>
        dispatch({ type: "INCREASE_MOVIE_DIARY_PAGE" }),
      setMovieDiarySearchString: (payload: IState["movieDiarySearchString"]) =>
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
      const year = curr.WatchedDate?.split("-")[0] || "";
      acc[year] = acc[year] ? acc[year] + 1 : 1;
      return acc;
    }, {} as IYearGroup);
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
