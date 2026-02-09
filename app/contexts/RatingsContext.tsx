import { createContext, use } from "react";
import type { ReactNode } from "react";

import useRatingsStore from "~/stores/useRatingsStore";

type ContextType = ReturnType<typeof useRatingsStore>;

interface IProps {
  children: ReactNode;
}

const RatingsContext = createContext({} as ContextType);
const useRatingsContext = () => use(RatingsContext);

function RatingsProvider({ children }: IProps) {
  const store = useRatingsStore();

  return <RatingsContext value={store}>{children}</RatingsContext>;
}

export { RatingsContext, RatingsProvider, useRatingsContext };
