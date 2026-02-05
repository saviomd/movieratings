import { createContext, useContext } from "react";
import type { ReactNode } from "react";

import useMovieRatingsStore from "~/hooks/useMovieRatingsStore";

type ContextType = ReturnType<typeof useMovieRatingsStore>;

interface IProps {
  children: ReactNode;
}

const MovieRatingsContext = createContext({} as ContextType);
const useMovieRatingsContext = () => useContext(MovieRatingsContext);

function MovieRatingsProvider({ children }: IProps) {
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
