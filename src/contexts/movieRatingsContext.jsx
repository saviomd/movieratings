import PropTypes from "prop-types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";

import filterMoviesByName from "../helpers/filterMoviesByName";
import formatMovieList from "../helpers/formatMovieList";
import { fetchMovieRatings } from "../helpers/letterboxdServices";
import useMovieRatingsStore from "../hooks/useMovieRatingsStore";

const MovieRatingsContext = createContext();
const useMovieRatingsContext = () => useContext(MovieRatingsContext);

function MovieRatingsProvider({ children }) {
  const { boundActions, state } = useMovieRatingsStore();

  const movieRatingsFiltered = useMemo(
    () =>
      filterMoviesByName(state.movieRatings, state.movieRatingsSearchString),
    [state.movieRatings, state.movieRatingsSearchString]
  );

  const movieRatingsPaginated = useMemo(() => {
    const size = state.movieRatingsPage * 100;
    return movieRatingsFiltered.slice(0, size);
  }, [movieRatingsFiltered, state.movieRatingsPage]);

  const moviesPerDecadeReleased = useMemo(() => {
    const groups = state.movieRatings.reduce((acc, curr) => {
      const decade = `${curr.Year.toString().substr(0, 3)}0`;
      acc[decade] = acc[decade] ? (acc[decade] += 1) : (acc[decade] = 1);
      return acc;
    }, {});
    let max = 0;
    Object.values(groups).forEach((decade) => {
      max = decade > max ? decade : max;
    });
    return { groups, max };
  }, [state.movieRatings]);

  const moviesPerRatingGiven = useMemo(() => {
    const groups = state.movieRatings.reduce((acc, curr) => {
      const rating = curr.Rating;
      acc[rating] = acc[rating] ? (acc[rating] += 1) : (acc[rating] = 1);
      return acc;
    }, {});
    let max = 0;
    Object.values(groups).forEach((rating) => {
      max = rating > max ? rating : max;
    });
    return { groups, max };
  }, [state.movieRatings]);

  const loadMovieRatings = useCallback(() => {
    boundActions.setMovieRatingsStatus("loading");
    return fetchMovieRatings()
      .then((json) => {
        const movieRatingsFormatted = formatMovieList(json);
        boundActions.setMovieRatings(movieRatingsFormatted);
        return movieRatingsFormatted;
      })
      .catch(() => {
        boundActions.setMovieRatingsStatus("error");
      });
  }, [boundActions]);

  useEffect(() => {
    loadMovieRatings();
  }, [loadMovieRatings]);

  const providerValue = useMemo(
    () => ({
      ...state,
      boundActions,
      movieRatingsFiltered,
      movieRatingsPaginated,
      moviesPerDecadeReleased,
      moviesPerRatingGiven,
    }),
    [
      boundActions,
      movieRatingsFiltered,
      movieRatingsPaginated,
      moviesPerDecadeReleased,
      moviesPerRatingGiven,
      state,
    ]
  );
  return (
    <MovieRatingsContext.Provider value={providerValue}>
      {children}
    </MovieRatingsContext.Provider>
  );
}

MovieRatingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MovieRatingsProvider, useMovieRatingsContext };
