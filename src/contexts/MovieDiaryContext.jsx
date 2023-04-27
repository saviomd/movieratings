import PropTypes from "prop-types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";

import { fetchMovieDiary } from "../utils";
import useMovieDiaryStore from "../hooks/useMovieDiaryStore";

const MovieDiaryContext = createContext();
const useMovieDiaryContext = () => useContext(MovieDiaryContext);

function MovieDiaryProvider({ children }) {
  const store = useMovieDiaryStore();

  const loadMovieDiary = useCallback(() => {
    store.boundActions.setMovieDiaryStatus("loading");
    return fetchMovieDiary()
      .then((json) => {
        store.boundActions.setMovieDiary(json);
      })
      .catch(() => {
        store.boundActions.setMovieDiaryStatus("error");
      });
  }, [store.boundActions]);

  useEffect(() => {
    loadMovieDiary();
  }, [loadMovieDiary]);

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
