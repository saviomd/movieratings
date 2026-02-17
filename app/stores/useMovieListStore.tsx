import { useMemo, useReducer } from "react";

import { filterMoviesByName, formatMovieList } from "~/utils";

interface IState {
  movieListPage: number;
  movieListSearchString: string;
}

interface IUseMovieListStore {
  movieList: ReturnType<typeof formatMovieList>;
}

type ActionType =
  | { type: "INCREASE_MOVIE_LIST_PAGE" }
  | { type: "SET_MOVIE_LIST_SEARCH_STRING"; payload: string };

const initialState: IState = {
  movieListPage: 1,
  movieListSearchString: "",
};

function reducer(state: IState, action: ActionType) {
  switch (action.type) {
    case "INCREASE_MOVIE_LIST_PAGE":
      return { ...state, movieListPage: state.movieListPage + 1 };
    case "SET_MOVIE_LIST_SEARCH_STRING":
      return { ...state, movieListSearchString: action.payload.toLowerCase() };
    default:
      throw new Error("Unknown action.type");
  }
}

const useMovieListStore = ({ movieList }: IUseMovieListStore) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const boundActions = useMemo(
    () => ({
      increaseMovieListPage: () => {
        dispatch({ type: "INCREASE_MOVIE_LIST_PAGE" });
      },
      setMovieListSearchString: (payload: IState["movieListSearchString"]) => {
        dispatch({ type: "SET_MOVIE_LIST_SEARCH_STRING", payload });
      },
    }),
    [],
  );

  const movieListFiltered = useMemo(
    () =>
      filterMoviesByName({
        movieList: movieList,
        value: state.movieListSearchString,
      }),
    [movieList, state.movieListSearchString],
  );

  const movieListPaginated = useMemo(() => {
    const size = state.movieListPage * 100;
    return movieListFiltered.slice(0, size);
  }, [movieListFiltered, state.movieListPage]);

  const hasMorePages = useMemo(() => {
    return movieListPaginated.length < movieListFiltered.length;
  }, [movieListFiltered, movieListPaginated]);

  return {
    ...state,
    boundActions,
    hasMorePages,
    movieList,
    movieListFiltered,
    movieListPaginated,
  };
};

export default useMovieListStore;
