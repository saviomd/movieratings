import PropTypes from "prop-types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";

import { getMovieDetails, getSearchMovies } from "../utils";
import useMovieDetailsStore from "../hooks/useMovieDetailsStore";

const MovieDetailsContext = createContext();
const useMovieDetailsContext = () => useContext(MovieDetailsContext);

function MovieDetailsProvider({ children, movie }) {
  const store = useMovieDetailsStore();

  const loadMovieDetails = useCallback(() => {
    if (movie !== undefined) {
      const { Name, Year } = movie;
      store.boundActions.setMovieDetailsStatus("loading");
      getSearchMovies({ Name, Year })
        .then((json) => {
          if (json.results.length) {
            const newMovie = json.results.find(
              (obj) =>
                obj.title === Name && obj.release_date.indexOf(Year) > -1,
            );
            if (newMovie !== undefined) {
              getMovieDetails({ movieId: newMovie.id }).then((movieDetails) => {
                store.boundActions.setMovieDetails({ movie, movieDetails });
              });
            } else {
              throw Error("No movie found");
            }
          } else {
            throw Error("No movie found");
          }
        })
        .catch(() => {
          store.boundActions.setMovieDetailsStatus("error");
        });
    } else {
      store.boundActions.setMovieDetailsStatus("error");
    }
  }, [movie, store.boundActions]);

  useEffect(() => {
    loadMovieDetails();
  }, [loadMovieDetails]);

  return (
    <MovieDetailsContext.Provider value={store}>
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

export {
  MovieDetailsContext as MovieDetailsContextMock,
  MovieDetailsProvider,
  useMovieDetailsContext,
};
