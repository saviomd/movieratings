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

const MovieDetailsProvider = ({ children, movie }) => {
  const { dispatcher, state } = useMovieDetailsStore();

  const loadMovieDetails = useCallback(() => {
    if (movie !== undefined) {
      const { Name, Year } = movie;
      dispatcher.setMovieDetailsStatus("loading");
      getSearchMovies({ Name, Year })
        .then((json) => {
          if (json.results.length) {
            const newMovie = json.results.find(
              (obj) => obj.title === Name && obj.release_date.indexOf(Year) > -1
            );
            if (newMovie !== undefined) {
              getMovieDetails({ movieId: newMovie.id }).then((movieDetails) => {
                dispatcher.setMovieDetails({ movie, movieDetails });
              });
            } else {
              throw Error("No movie found");
            }
          } else {
            throw Error("No movie found");
          }
        })
        .catch(() => {
          dispatcher.setMovieDetailsStatus("error");
        });
    } else {
      dispatcher.setMovieDetailsStatus("error");
    }
  }, [dispatcher, movie]);

  useEffect(() => {
    loadMovieDetails();
  }, [loadMovieDetails]);

  const providerValue = useMemo(() => state, [state]);
  return (
    <MovieDetailsContext.Provider value={providerValue}>
      {children}
    </MovieDetailsContext.Provider>
  );
};

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
