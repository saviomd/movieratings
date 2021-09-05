import PropTypes from "prop-types";
import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";

import { getMovieDetails, getSearchMovies } from "../helpers/tmdbServices";
import formatMovieDetails from "../helpers/formatMovieDetails";

const MovieDetailsContext = createContext();
const useMovieDetails = () => useContext(MovieDetailsContext);

const initialState = {
  movieDetails: {},
  movieDetailsStatus: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setMovieDetails":
      return {
        ...state,
        movieDetails: action.payload,
        movieDetailsStatus: "loaded",
      };
    case "setMovieDetailsStatus":
      return { ...state, movieDetailsStatus: action.payload };
    default:
      throw new Error();
  }
}

const MovieDetailsProvider = ({ children, movie }) => {
  const [state, dispatchMovieDetails] = useReducer(reducer, initialState);

  const loadMovieDetails = useCallback(() => {
    if (movie !== undefined) {
      const { Name, Year } = movie;
      dispatchMovieDetails({
        type: "setMovieDetailsStatus",
        payload: "loading",
      });
      getSearchMovies({ Name, Year })
        .then((json) => {
          if (json.results.length) {
            const newMovie = json.results.find(
              (obj) => obj.title === Name && obj.release_date.indexOf(Year) > -1
            );
            if (newMovie !== undefined) {
              getMovieDetails({ movieId: newMovie.id }).then((movieDetails) => {
                dispatchMovieDetails({
                  type: "setMovieDetails",
                  payload: formatMovieDetails({ movie, movieDetails }),
                });
              });
            } else {
              throw Error("No movie found");
            }
          } else {
            throw Error("No movie found");
          }
        })
        .catch(() => {
          dispatchMovieDetails({
            type: "setMovieDetailsStatus",
            payload: "error",
          });
        });
    } else {
      dispatchMovieDetails({ type: "setMovieDetailsStatus", payload: "error" });
    }
  }, [movie]);

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

export { MovieDetailsProvider, useMovieDetails };
