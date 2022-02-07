import PropTypes from "prop-types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";

import { getMovieDetails, getSearchMovies } from "../helpers/tmdbServices";
import useMovieDetailsStore from "../hooks/useMovieDetailsStore";

const MovieDetailsContext = createContext();
const useMovieDetailsContext = () => useContext(MovieDetailsContext);

function MovieDetailsProvider({ children, movie }) {
  const { boundActions, state } = useMovieDetailsStore();

  const loadMovieDetails = useCallback(() => {
    if (movie !== undefined) {
      const { Name, Year } = movie;
      boundActions.setMovieDetailsStatus("loading");
      getSearchMovies({ Name, Year })
        .then((json) => {
          if (json.results.length) {
            const newMovie = json.results.find(
              (obj) => obj.title === Name && obj.release_date.indexOf(Year) > -1
            );
            if (newMovie !== undefined) {
              getMovieDetails({ movieId: newMovie.id }).then((movieDetails) => {
                boundActions.setMovieDetails({ movie, movieDetails });
              });
            } else {
              throw Error("No movie found");
            }
          } else {
            throw Error("No movie found");
          }
        })
        .catch(() => {
          boundActions.setMovieDetailsStatus("error");
        });
    } else {
      boundActions.setMovieDetailsStatus("error");
    }
  }, [boundActions, movie]);

  useEffect(() => {
    loadMovieDetails();
  }, [loadMovieDetails]);

  const providerValue = useMemo(() => state, [state]);
  return (
    <MovieDetailsContext.Provider value={providerValue}>
      {children}
    </MovieDetailsContext.Provider>
  );
}

MovieDetailsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  movie: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Year: PropTypes.number.isRequired,
  }),
};

MovieDetailsProvider.defaultProps = {
  movie: undefined,
};

export { MovieDetailsProvider, useMovieDetailsContext };
