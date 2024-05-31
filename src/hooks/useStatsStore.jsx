import { useMemo, useReducer } from "react";

import { formatRandomMovieList } from "src/utils";

const initialState = {
  randomMovies: [],
  randomMoviesStatus: "",
};

function reducer(state, { payload, type }) {
  switch (type) {
    case "SET_RANDOM_MOVIES":
      return {
        ...state,
        randomMovies: formatRandomMovieList({ randomMovieList: payload }),
        randomMoviesStatus: "loaded",
      };
    case "SET_RANDOM_MOVIES_STATUS":
      return { ...state, randomMoviesStatus: payload };
    default:
      throw new Error();
  }
}

const useStatsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const boundActions = useMemo(
    () => ({
      setRandomMovies: (payload) =>
        dispatch({ type: "SET_RANDOM_MOVIES", payload }),
      setRandomMoviesStatus: (payload) =>
        dispatch({ type: "SET_RANDOM_MOVIES_STATUS", payload }),
    }),
    [],
  );

  return { ...state, boundActions };
};

export default useStatsStore;
