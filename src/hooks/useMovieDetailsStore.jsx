import { useMemo, useReducer } from "react";

import formatMovieDetails from "../helpers/formatMovieDetails";

const initialState = {
  movieDetails: {},
  movieDetailsStatus: "",
};

function reducer(state, { payload, type }) {
  switch (type) {
    case "setMovieDetails":
      return {
        ...state,
        movieDetails: payload,
        movieDetailsStatus: "loaded",
      };
    case "setMovieDetailsStatus":
      return { ...state, movieDetailsStatus: payload };
    default:
      throw new Error();
  }
}

const useMovieDetailsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatcher = useMemo(
    () => ({
      setMovieDetails: ({ movie, movieDetails }) =>
        dispatch({
          type: "setMovieDetails",
          payload: formatMovieDetails({ movie, movieDetails }),
        }),
      setMovieDetailsStatus: (payload) =>
        dispatch({ type: "setMovieDetailsStatus", payload }),
    }),
    []
  );

  return { dispatcher, state };
};

export default useMovieDetailsStore;
