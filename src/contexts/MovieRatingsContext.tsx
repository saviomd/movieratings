import { createContext, ReactNode, useContext } from "react";

import useMovieRatingsStore from "src/hooks/useMovieRatingsStore";

type MovieRatingsStoreType = ReturnType<typeof useMovieRatingsStore>;

type ContextType = MovieRatingsStoreType | null;

type PropsType = {
  children: ReactNode;
};

const MovieRatingsContext = createContext<ContextType>(null);
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

export type { MovieRatingsStoreType };
