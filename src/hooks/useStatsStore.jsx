import { useCallback, useEffect, useMemo, useReducer } from "react";

import { useMovieRatingsContext } from "src/contexts/MovieRatingsContext";
import { formatRandomMovieList, getSearchMovies } from "src/utils";

const initialState = {
  randomMovies: [],
  randomMoviesStatus: "",
};

function reducer(state, { payload, type }) {
  switch (type) {
    case "SET_RANDOM_MOVIES":
      return {
        ...state,
        randomMovies: formatRandomMovieList({ randomMovieList: payload }),
        randomMoviesStatus: "loaded",
      };
    case "SET_RANDOM_MOVIES_STATUS":
      return { ...state, randomMoviesStatus: payload };
    default:
      throw new Error();
  }
}

const useStatsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movieRatings, movieRatingsStatus } = useMovieRatingsContext();

  const boundActions = useMemo(
    () => ({
      setRandomMovies: (payload) =>
        dispatch({ type: "SET_RANDOM_MOVIES", payload }),
      setRandomMoviesStatus: (payload) =>
        dispatch({ type: "SET_RANDOM_MOVIES_STATUS", payload }),
    }),
    [],
  );

  const loadRandomMovies = useCallback(() => {
    const movies = movieRatings
      .sort(() => 0.5 - Math.random())
      .slice(0, 6)
      .map(({ LetterboxdURI, Name, Rating, Year }) => ({
        LetterboxdURI,
        Name,
        Rating,
        Year,
      }));
    if (movies.length) {
      boundActions.setRandomMoviesStatus("loading");
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
            boundActions.setRandomMovies(payload);
          } else {
            throw Error("No movie found");
          }
        })
        .catch(() => {
          boundActions.setRandomMoviesStatus("error");
        });
    } else {
      boundActions.setRandomMoviesStatus("error");
    }
  }, [boundActions, movieRatings]);

  useEffect(() => {
    if (movieRatingsStatus === "loaded" && state.randomMoviesStatus === "") {
      loadRandomMovies();
    }
  }, [loadRandomMovies, movieRatingsStatus, state.randomMoviesStatus]);

  return { ...state, boundActions };
};

export default useStatsStore;
