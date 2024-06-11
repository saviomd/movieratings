import PropTypes from "prop-types";
import React, { createContext, useContext } from "react";

import useMovieRatingsStore from "src/hooks/useMovieRatingsStore";

const MovieRatingsContext = createContext();
const useMovieRatingsContext = () => useContext(MovieRatingsContext);

function MovieRatingsProvider({ children }) {
  const store = useMovieRatingsStore();

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
