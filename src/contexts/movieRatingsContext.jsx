import PropTypes from "prop-types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";

import { fetchMovieRatings } from "../helpers/letterboxdServices";
import useMovieRatingsStore from "../hooks/useMovieRatingsStore";

const MovieRatingsContext = createContext();
const useMovieRatingsContext = () => useContext(MovieRatingsContext);

function MovieRatingsProvider({ children }) {
  const store = useMovieRatingsStore();

  const loadMovieRatings = useCallback(() => {
    store.boundActions.setMovieRatingsStatus("loading");
    return fetchMovieRatings()
      .then((json) => {
        store.boundActions.setMovieRatings(json);
      })
      .catch(() => {
        store.boundActions.setMovieRatingsStatus("error");
      });
  }, [store.boundActions]);

  useEffect(() => {
    loadMovieRatings();
  }, [loadMovieRatings]);

  return (
    <MovieRatingsContext.Provider value={store}>
      {children}
    </MovieRatingsContext.Provider>
  );
}

MovieRatingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  MovieRatingsContext as MovieRatingsContextMock,
  MovieRatingsProvider,
  useMovieRatingsContext,
};
