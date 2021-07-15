import PropTypes from "prop-types";
import React, { useCallback, useEffect, useMemo, useReducer } from "react";

import { fetchMovieInfo } from "../helpers/tmdbServices";
import tmdbApi from "../helpers/tmdbApi";
import formatMovieInfo from "../helpers/formatMovieInfo";

const MovieInfoContext = React.createContext();

const initialState = {
  movieInfo: {
    backdrop_url: tmdbApi.img.fallbackUrl,
    id: "",
    LetterboxdURI: "",
    overview: "",
    poster_url: tmdbApi.img.fallbackUrl,
    Rating: "",
    title: "",
    vote_average: "",
  },
  movieInfoStatus: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setMovieInfo":
      return { ...state, movieInfo: action.payload, movieInfoStatus: "loaded" };
    case "setMovieInfoStatus":
      return { ...state, movieInfoStatus: action.payload };
    default:
      throw new Error();
  }
}

const MovieInfoStore = ({ children, movie }) => {
  const [state, dispatchMovieInfo] = useReducer(reducer, initialState);

  const loadMovieInfo = useCallback(() => {
    if (movie !== undefined) {
      dispatchMovieInfo({ type: "setMovieInfoStatus", payload: "loading" });
      fetchMovieInfo(movie)
        .then((json) => {
          if (json.results.length) {
            const newMovie = json.results.find(
              (obj) =>
                obj.title === movie.Name &&
                obj.release_date.indexOf(movie.Year) > -1
            );
            if (newMovie !== undefined) {
              dispatchMovieInfo({
                type: "setMovieInfo",
                payload: formatMovieInfo(movie, newMovie),
              });
            } else {
              throw Error("No movie found");
            }
          } else {
            throw Error("No movie found");
          }
        })
        .catch(() => {
          dispatchMovieInfo({ type: "setMovieInfoStatus", payload: "error" });
        });
    } else {
      dispatchMovieInfo({ type: "setMovieInfoStatus", payload: "error" });
    }
  }, [movie]);

  useEffect(() => {
    loadMovieInfo();
  }, [loadMovieInfo]);

  const providerValue = useMemo(() => state, [state]);
  return (
    <MovieInfoContext.Provider value={providerValue}>
      {children}
    </MovieInfoContext.Provider>
  );
};

MovieInfoStore.propTypes = {
  children: PropTypes.node.isRequired,
  movie: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Year: PropTypes.number.isRequired,
  }),
};

MovieInfoStore.defaultProps = {
  movie: undefined,
};

export { MovieInfoContext as default, MovieInfoStore };
