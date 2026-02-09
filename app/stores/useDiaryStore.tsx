import { useMemo, useReducer } from "react";

import { filterMoviesByName, letterboxdServices } from "~/utils";

interface IState {
  movieDiaryPage: number;
  movieDiarySearchString: string;
}

type ActionType =
  | { type: "INCREASE_MOVIE_DIARY_PAGE" }
  | { type: "SET_MOVIE_DIARY_SEARCH_STRING"; payload: string };

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
      throw new Error("Unknown action.type");
  }
}

const useDiaryStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const boundActions = useMemo(
    () => ({
      increaseMovieDiaryPage: () => {
        dispatch({ type: "INCREASE_MOVIE_DIARY_PAGE" });
      },
      setMovieDiarySearchString: (
        payload: IState["movieDiarySearchString"],
      ) => {
        dispatch({ type: "SET_MOVIE_DIARY_SEARCH_STRING", payload });
      },
    }),
    [],
  );

  const { movieDiary, movieDiaryStatus } =
    letterboxdServices.useMovieDiaryQuery();

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

  return {
    ...state,
    boundActions,
    movieDiary,
    movieDiaryFiltered,
    movieDiaryPaginated,
    movieDiaryStatus,
  };
};

export default useDiaryStore;
