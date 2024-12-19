import { createContext, ReactNode, useContext } from "react";

import useMovieDetailsStore from "src/hooks/useMovieDetailsStore";

type ContextType = ReturnType<typeof useMovieDetailsStore> | null;

type PropsType = {
  children: ReactNode;
};

const MovieDetailsContext = createContext<ContextType>(null);
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
