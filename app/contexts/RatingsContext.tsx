import { createContext, use } from "react";
import type { ReactNode } from "react";

import useRatingsStore from "~/stores/useRatingsStore";

type ContextType = ReturnType<typeof useRatingsStore>;

interface IProps {
  children: ReactNode;
  movieRatings: Parameters<typeof useRatingsStore>[0]["movieRatings"];
}

const RatingsContext = createContext({} as ContextType);
const useRatingsContext = () => use(RatingsContext);

function RatingsProvider({ children, movieRatings }: IProps) {
  const store = useRatingsStore({ movieRatings });

  return <RatingsContext value={store}>{children}</RatingsContext>;
}

export { RatingsContext, RatingsProvider, useRatingsContext };
