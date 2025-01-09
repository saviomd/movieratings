import { createContext, ReactNode, useContext } from "react";

import useStatsStore from "src/hooks/useStatsStore";

type StatsStoreType = ReturnType<typeof useStatsStore>;

type ContextType = StatsStoreType | null;

type PropsType = {
  children: ReactNode;
};

const StatsContext = createContext<ContextType>(null);
const useStatsContext = () => useContext(StatsContext);

function StatsProvider({ children }: PropsType) {
  const store = useStatsStore();

  return (
    <StatsContext.Provider value={store}>{children}</StatsContext.Provider>
  );
}

export { StatsContext as StatsContextMock, StatsProvider, useStatsContext };

export type { StatsStoreType };
