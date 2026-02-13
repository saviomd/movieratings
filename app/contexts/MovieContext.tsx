import { createContext, use } from "react";
import type { ReactNode } from "react";

import useMovieStore from "~/stores/useMovieStore";

type ContextType = ReturnType<typeof useMovieStore>;

interface IProps {
  children: ReactNode;
  movie: Parameters<typeof useMovieStore>[0]["movie"];
}

const MovieContext = createContext({} as ContextType);
const useMovieContext = () => use(MovieContext);

function MovieProvider({ children, movie }: IProps) {
  const store = useMovieStore({ movie });

  return <MovieContext value={store}>{children}</MovieContext>;
}

export { MovieContext, MovieProvider, useMovieContext };
