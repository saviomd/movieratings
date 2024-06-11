import PropTypes from "prop-types";
import React, { createContext, useContext } from "react";

import useMovieDiaryStore from "src/hooks/useMovieDiaryStore";

const MovieDiaryContext = createContext();
const useMovieDiaryContext = () => useContext(MovieDiaryContext);

function MovieDiaryProvider({ children }) {
  const store = useMovieDiaryStore();

  return (
    <MovieDiaryContext.Provider value={store}>
      {children}
    </MovieDiaryContext.Provider>
  );
}

MovieDiaryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  MovieDiaryContext as MovieDiaryContextMock,
  MovieDiaryProvider,
  useMovieDiaryContext,
};
