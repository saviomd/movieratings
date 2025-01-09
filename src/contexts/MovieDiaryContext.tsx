import { createContext, ReactNode, useContext } from "react";

import useMovieDiaryStore from "src/hooks/useMovieDiaryStore";

type MovieDiaryStoreType = ReturnType<typeof useMovieDiaryStore>;

type ContextType = MovieDiaryStoreType | null;

type PropsType = {
  children: ReactNode;
};

const MovieDiaryContext = createContext<ContextType>(null);
const useMovieDiaryContext = () => useContext(MovieDiaryContext);

function MovieDiaryProvider({ children }: PropsType) {
  const store = useMovieDiaryStore();

  return (
    <MovieDiaryContext.Provider value={store}>
      {children}
    </MovieDiaryContext.Provider>
  );
}

export {
  MovieDiaryContext as MovieDiaryContextMock,
  MovieDiaryProvider,
  useMovieDiaryContext,
};

export type { MovieDiaryStoreType };
