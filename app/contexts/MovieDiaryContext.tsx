import { createContext, useContext } from "react";
import type { ReactNode } from "react";

import useMovieDiaryStore from "~/hooks/useMovieDiaryStore";

type ContextType = ReturnType<typeof useMovieDiaryStore>;

interface IProps {
  children: ReactNode;
}

const MovieDiaryContext = createContext({} as ContextType);
const useMovieDiaryContext = () => useContext(MovieDiaryContext);

function MovieDiaryProvider({ children }: IProps) {
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
