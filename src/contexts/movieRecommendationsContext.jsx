import PropTypes from "prop-types";
import React, { useEffect, useMemo, useReducer } from "react";

import formatMovieRecommendations from "../helpers/formatMovieRecommendations";
import { fetchMovieRecommendations } from "../helpers/tmdbServices";

const MovieRecommendationsContext = React.createContext();

const initialState = {
  movieRecommendations: [],
  movieRecommendationsStatus: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setMovieRecommendations":
      return {
        ...state,
        movieRecommendations: action.payload,
        movieRecommendationsStatus: "loaded",
      };
    case "setMovieRecommendationsStatus":
      return { ...state, movieRecommendationsStatus: action.payload };
    default:
      throw new Error();
  }
}

const MovieRecommendationsStore = ({ children, movieId }) => {
  const [state, dispatchMovieRecommendations] = useReducer(
    reducer,
    initialState
  );

  function loadMovieRecommendations(id) {
    dispatchMovieRecommendations({
      type: "setMovieRecommendationsStatus",
      payload: "loading",
    });
    fetchMovieRecommendations(id)
      .then((json) => {
        dispatchMovieRecommendations({
          type: "setMovieRecommendations",
          payload: formatMovieRecommendations(json.results),
        });
      })
      .catch(() => {
        dispatchMovieRecommendations({
          type: "setMovieRecommendationsStatus",
          payload: "error",
        });
      });
  }

  useEffect(() => {
    loadMovieRecommendations(movieId);
  }, [movieId]);

  const providerValue = useMemo(() => state, [state]);
  return (
    <MovieRecommendationsContext.Provider value={providerValue}>
      {children}
    </MovieRecommendationsContext.Provider>
  );
};

MovieRecommendationsStore.propTypes = {
  children: PropTypes.node.isRequired,
  movieId: PropTypes.number.isRequired,
};

export { MovieRecommendationsContext as default, MovieRecommendationsStore };
