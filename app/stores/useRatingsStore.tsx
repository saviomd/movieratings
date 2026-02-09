import { useMemo, useReducer } from "react";

import { filterMoviesByName, letterboxdServices } from "~/utils";

interface IState {
  movieRatingsPage: number;
  movieRatingsSearchString: string;
}

type ActionType =
  | { type: "INCREASE_MOVIE_RATINGS_PAGE" }
  | { type: "SET_MOVIE_RATINGS_SEARCH_STRING"; payload: string };

const initialState: IState = {
  movieRatingsPage: 1,
  movieRatingsSearchString: "",
};

function reducer(state: IState, action: ActionType) {
  switch (action.type) {
    case "INCREASE_MOVIE_RATINGS_PAGE":
      return { ...state, movieRatingsPage: state.movieRatingsPage + 1 };
    case "SET_MOVIE_RATINGS_SEARCH_STRING":
      return {
        ...state,
        movieRatingsSearchString: action.payload.toLowerCase(),
      };
    default:
      throw new Error("Unknown action.type");
  }
}

const useRatingsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const boundActions = useMemo(
    () => ({
      increaseMovieRatingsPage: () => {
        dispatch({ type: "INCREASE_MOVIE_RATINGS_PAGE" });
      },
      setMovieRatingsSearchString: (
        payload: IState["movieRatingsSearchString"],
      ) => {
        dispatch({ type: "SET_MOVIE_RATINGS_SEARCH_STRING", payload });
      },
    }),
    [],
  );

  const { movieRatings, movieRatingsStatus } =
    letterboxdServices.useMovieRatingsQuery();

  const movieRatingsFiltered = useMemo(
    () =>
      filterMoviesByName({
        movieList: movieRatings,
        value: state.movieRatingsSearchString,
      }),
    [movieRatings, state.movieRatingsSearchString],
  );

  const movieRatingsPaginated = useMemo(() => {
    const size = state.movieRatingsPage * 100;
    return movieRatingsFiltered.slice(0, size);
  }, [movieRatingsFiltered, state.movieRatingsPage]);

  return {
    ...state,
    boundActions,
    movieRatings,
    movieRatingsFiltered,
    movieRatingsPaginated,
    movieRatingsStatus,
  };
};

export default useRatingsStore;
