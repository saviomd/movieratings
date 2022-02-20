import { useMemo, useReducer } from "react";

import formatMovieDetails from "../helpers/formatMovieDetails";

const initialState = {
  movieDetails: {},
  movieDetailsStatus: "",
};

function reducer(state, { payload, type }) {
  switch (type) {
    case "SET_MOVIE_DETAILS": {
      const { movie, movieDetails } = payload;
      return {
        ...state,
        movieDetails: formatMovieDetails({ movie, movieDetails }),
        movieDetailsStatus: "loaded",
      };
    }
    case "SET_MOVIE_DETAILS_STATUS":
      return { ...state, movieDetailsStatus: payload };
    default:
      throw new Error();
  }
}

const useMovieDetailsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const boundActions = useMemo(
    () => ({
      setMovieDetails: (payload) =>
        dispatch({ type: "SET_MOVIE_DETAILS", payload }),
      setMovieDetailsStatus: (payload) =>
        dispatch({ type: "SET_MOVIE_DETAILS_STATUS", payload }),
    }),
    []
  );

  return { ...state, boundActions };
};

export default useMovieDetailsStore;
