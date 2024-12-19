import { createContext, ReactNode, useContext } from "react";

import useStatsStore from "src/hooks/useStatsStore";

type ContextType = ReturnType<typeof useStatsStore> | null;

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
