import { useCallback, useEffect, useMemo, useReducer } from "react";

import { useMovieDiaryContext } from "src/contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "src/contexts/MovieRatingsContext";
import {
  formatMovieDetails,
  getMovieDetails,
  getSearchMovies,
} from "src/utils";

const initialState = {
  movieDetails: {},
  movieDetailsStatus: "",
};

function reducer(state, { payload, type }) {
  switch (type) {
    case "SET_MOVIE_DETAILS": {
      const { movie, movieDetails } = payload;
      return {
        ...state,
        movieDetails: formatMovieDetails({ movie, movieDetails }),
        movieDetailsStatus: "loaded",
      };
    }
    case "SET_MOVIE_DETAILS_STATUS":
      return { ...state, movieDetailsStatus: payload };
    default:
      throw new Error();
  }
}

const useMovieDetailsStore = ({ movieId }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movieDiary } = useMovieDiaryContext();
  const { movieRatings } = useMovieRatingsContext();

  const boundActions = useMemo(
    () => ({
      setMovieDetails: (payload) =>
        dispatch({ type: "SET_MOVIE_DETAILS", payload }),
      setMovieDetailsStatus: (payload) =>
        dispatch({ type: "SET_MOVIE_DETAILS_STATUS", payload }),
    }),
    [],
  );

  const loadMovieDetails = useCallback(() => {
    if (movieDiary.length && movieRatings.length) {
      const movie = [...movieDiary, ...movieRatings].find(
        (obj) => obj.Id === movieId,
      );
      const { Name, Year } = movie;
      boundActions.setMovieDetailsStatus("loading");
      getSearchMovies({ Name, Year })
        .then((json) => {
          if (json.results.length) {
            const newMovie = json.results.find(
              (obj) =>
                obj.title === Name && obj.release_date.indexOf(Year) > -1,
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
  }, [boundActions, movieDiary, movieId, movieRatings]);

  useEffect(() => {
    loadMovieDetails();
  }, [loadMovieDetails]);

  return { ...state, boundActions };
};

export default useMovieDetailsStore;
