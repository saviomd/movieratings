import { createContext, useContext } from "react";
import type { ReactNode } from "react";

import useMovieRatingsStore from "src/hooks/useMovieRatingsStore";

type ContextType = ReturnType<typeof useMovieRatingsStore>;

type PropsType = {
  children: ReactNode;
};

const MovieRatingsContext = createContext({} as ContextType);
const useMovieRatingsContext = () => useContext(MovieRatingsContext);

function MovieRatingsProvider({ children }: PropsType) {
  const store = useMovieRatingsStore();

  return (
    <MovieRatingsContext.Provider value={store}>
      {children}
    </MovieRatingsContext.Provider>
  );
}

export {
  MovieRatingsContext as MovieRatingsContextMock,
  MovieRatingsProvider,
  useMovieRatingsContext,
};
