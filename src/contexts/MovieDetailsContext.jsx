import PropTypes from "prop-types";
import React, { createContext, useContext } from "react";

import useMovieDetailsStore from "src/hooks/useMovieDetailsStore";

const MovieDetailsContext = createContext();
const useMovieDetailsContext = () => useContext(MovieDetailsContext);

function MovieDetailsProvider({ children, movieId }) {
  const store = useMovieDetailsStore({ movieId });

  return (
    <MovieDetailsContext.Provider value={store}>
      {children}
    </MovieDetailsContext.Provider>
  );
}

MovieDetailsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  movieId: PropTypes.string.isRequired,
};

export {
  MovieDetailsContext as MovieDetailsContextMock,
  MovieDetailsProvider,
  useMovieDetailsContext,
};
