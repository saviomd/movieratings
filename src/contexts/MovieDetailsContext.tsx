import { createContext, useContext } from "react";
import type { ReactNode } from "react";

import useMovieDetailsStore from "src/hooks/useMovieDetailsStore";

type ContextType = ReturnType<typeof useMovieDetailsStore>;

type PropsType = {
  children: ReactNode;
};

const MovieDetailsContext = createContext({} as ContextType);
const useMovieDetailsContext = () => useContext(MovieDetailsContext);

function MovieDetailsProvider({ children }: PropsType) {
  const store = useMovieDetailsStore();

  return (
    <MovieDetailsContext.Provider value={store}>
      {children}
    </MovieDetailsContext.Provider>
  );
}

export {
  MovieDetailsContext as MovieDetailsContextMock,
  MovieDetailsProvider,
  useMovieDetailsContext,
};
