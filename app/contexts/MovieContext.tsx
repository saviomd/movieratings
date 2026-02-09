import { createContext, use } from "react";
import type { ReactNode } from "react";

import useMovieStore from "~/stores/useMovieStore";

type ContextType = ReturnType<typeof useMovieStore>;

interface IProps {
  children: ReactNode;
}

const MovieContext = createContext({} as ContextType);
const useMovieContext = () => use(MovieContext);

function MovieProvider({ children }: IProps) {
  const store = useMovieStore();

  return <MovieContext value={store}>{children}</MovieContext>;
}

export { MovieContext, MovieProvider, useMovieContext };
