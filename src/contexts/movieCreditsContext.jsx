import PropTypes from "prop-types";
import React, { useCallback, useEffect, useMemo, useReducer } from "react";

import formatMovieCredits from "../helpers/formatMovieCredits";
import { getMovieCredits } from "../helpers/tmdbServices";

const MovieCreditsContext = React.createContext();

const initialState = {
  movieCredits: {
    cast: [],
    crew: [],
    id: "",
  },
  movieCreditsStatus: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setMovieCredits":
      return {
        ...state,
        movieCredits: action.payload,
        movieCreditsStatus: "loaded",
      };
    case "setMovieCreditsStatus":
      return { ...state, movieCreditsStatus: action.payload };
    default:
      throw new Error();
  }
}

const MovieCreditsStore = ({ children, movieId }) => {
  const [state, dispatchMovieCredits] = useReducer(reducer, initialState);

  const loadMovieCredits = useCallback(() => {
    dispatchMovieCredits({ type: "setMovieCreditsStatus", payload: "loading" });
    getMovieCredits({ movieId })
      .then((json) => {
        dispatchMovieCredits({
          type: "setMovieCredits",
          payload: formatMovieCredits(json),
        });
      })
      .catch(() => {
        dispatchMovieCredits({
          type: "setMovieCreditsStatus",
          payload: "error",
        });
      });
  }, [movieId]);

  useEffect(() => {
    loadMovieCredits();
  }, [loadMovieCredits]);

  const providerValue = useMemo(() => state, [state]);
  return (
    <MovieCreditsContext.Provider value={providerValue}>
      {children}
    </MovieCreditsContext.Provider>
  );
};

MovieCreditsStore.propTypes = {
  children: PropTypes.node.isRequired,
  movieId: PropTypes.number.isRequired,
};

export { MovieCreditsContext as default, MovieCreditsStore };
