import { useMemo, useReducer } from "react";

const initialState = {
  movieRatings: [],
  movieRatingsPage: 1,
  movieRatingsSearchString: "",
  movieRatingsStatus: "",
};

function reducer(state, { payload, type }) {
  switch (type) {
    case "SET_MOVIE_RATINGS":
      return {
        ...state,
        movieRatings: payload,
        movieRatingsStatus: "loaded",
      };
    case "SET_MOVIE_RATINGS_PAGE":
      return { ...state, movieRatingsPage: state.movieRatingsPage + 1 };
    case "SET_MOVIE_RATINGS_SEARCH_STRING":
      return {
        ...state,
        movieRatingsSearchString: payload.toLowerCase(),
      };
    case "SET_MOVIE_RATINGS_STATUS":
      return { ...state, movieRatingsStatus: payload };
    default:
      throw new Error();
  }
}

const useMovieRatingsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const boundActions = useMemo(
    () => ({
      setMovieRatings: (payload) =>
        dispatch({ type: "SET_MOVIE_RATINGS", payload }),
      setMovieRatingsPage: () => dispatch({ type: "SET_MOVIE_RATINGS_PAGE" }),
      setMovieRatingsSearchString: (payload) =>
        dispatch({ type: "SET_MOVIE_RATINGS_SEARCH_STRING", payload }),
      setMovieRatingsStatus: (payload) =>
        dispatch({ type: "SET_MOVIE_RATINGS_STATUS", payload }),
    }),
    []
  );

  return { boundActions, state };
};

export default useMovieRatingsStore;
