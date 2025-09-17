import { createContext, useContext } from "react";
import type { ReactNode } from "react";

import useStatsStore from "src/hooks/useStatsStore";

type ContextType = ReturnType<typeof useStatsStore>;

interface IProps {
  children: ReactNode;
}

const StatsContext = createContext({} as ContextType);
const useStatsContext = () => useContext(StatsContext);

function StatsProvider({ children }: IProps) {
  const store = useStatsStore();

  return (
    <StatsContext.Provider value={store}>{children}</StatsContext.Provider>
  );
}

export { StatsContext as StatsContextMock, StatsProvider, useStatsContext };
