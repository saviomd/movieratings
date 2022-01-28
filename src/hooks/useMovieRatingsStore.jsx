import { useMemo, useReducer } from "react";

const initialState = {
  movieRatings: [],
  movieRatingsPage: 1,
  movieRatingsSearchString: "",
  movieRatingsStatus: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setMovieRatings":
      return {
        ...state,
        movieRatings: action.payload,
        movieRatingsStatus: "loaded",
      };
    case "setMovieRatingsPage":
      return { ...state, movieRatingsPage: state.movieRatingsPage + 1 };
    case "setMovieRatingsSearchString":
      return {
        ...state,
        movieRatingsSearchString: action.payload.toLowerCase(),
      };
    case "setMovieRatingsStatus":
      return { ...state, movieRatingsStatus: action.payload };
    default:
      throw new Error();
  }
}

const useMovieRatingsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatcher = useMemo(
    () => ({
      setMovieRatings: (payload) =>
        dispatch({ type: "setMovieRatings", payload }),
      setMovieRatingsPage: () => dispatch({ type: "setMovieRatingsPage" }),
      setMovieRatingsSearchString: (payload) =>
        dispatch({ type: "setMovieRatingsSearchString", payload }),
      setMovieRatingsStatus: (payload) =>
        dispatch({ type: "setMovieRatingsStatus", payload }),
    }),
    []
  );

  return { dispatcher, state };
};

export default useMovieRatingsStore;
