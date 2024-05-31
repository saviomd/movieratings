import PropTypes from "prop-types";
import React, { createContext, useCallback, useContext } from "react";

import { getSearchMovies } from "src/utils";
import useStatsStore from "src/hooks/useStatsStore";

const StatsContext = createContext();
const useStatsContext = () => useContext(StatsContext);

function StatsProvider({ children }) {
  const store = useStatsStore();

  const loadRandomMovies = useCallback(
    ({ movies }) => {
      if (movies.length) {
        store.boundActions.setRandomMoviesStatus("loading");
        const allGetSearchMovies = movies.map(({ Name, Year }) =>
          getSearchMovies({ Name, Year }),
        );
        Promise.all(allGetSearchMovies)
          .then((jsons) => {
            if (jsons.length) {
              const payload = jsons.map(({ results }, index) => {
                const { LetterboxdURI, Name } = movies[index];
                const { poster_path } = results[0];
                return {
                  LetterboxdURI,
                  Name,
                  poster_path,
                };
              });
              store.boundActions.setRandomMovies(payload);
            } else {
              throw Error("No movie found");
            }
          })
          .catch(() => {
            store.boundActions.setRandomMoviesStatus("error");
          });
      } else {
        store.boundActions.setRandomMoviesStatus("error");
      }
    },
    [store.boundActions],
  );

  const providerValue = { ...store, loadRandomMovies };
  return (
    <StatsContext.Provider value={providerValue}>
      {children}
    </StatsContext.Provider>
  );
}

StatsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StatsContext as StatsContextMock, StatsProvider, useStatsContext };
