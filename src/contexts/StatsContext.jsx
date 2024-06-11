import PropTypes from "prop-types";
import React, { createContext, useContext } from "react";

import useStatsStore from "src/hooks/useStatsStore";

const StatsContext = createContext();
const useStatsContext = () => useContext(StatsContext);

function StatsProvider({ children }) {
  const store = useStatsStore();

  return (
    <StatsContext.Provider value={store}>{children}</StatsContext.Provider>
  );
}

StatsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StatsContext as StatsContextMock, StatsProvider, useStatsContext };
