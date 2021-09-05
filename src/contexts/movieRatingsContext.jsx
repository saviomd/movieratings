import PropTypes from "prop-types";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

import filterMoviesByName from "../helpers/filterMoviesByName";
import formatMovieList from "../helpers/formatMovieList";
import { fetchMovieRatings } from "../helpers/letterboxdServices";

const MovieRatingsContext = createContext();
const useMovieRatings = () => useContext(MovieRatingsContext);

const initialState = {
  movieRatings: [],
  movieRatingsPage: 1,
  movieRatingsSearchString: "",
  movieRatingsStatus: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setMovieRatings":
      return {
        ...state,
        movieRatings: action.payload,
        movieRatingsStatus: "loaded",
      };
    case "setMovieRatingsPage":
      return { ...state, movieRatingsPage: state.movieRatingsPage + 1 };
    case "setMovieRatingsSearchString":
      return {
        ...state,
        movieRatingsSearchString: action.payload.toLowerCase(),
      };
    case "setMovieRatingsStatus":
      return { ...state, movieRatingsStatus: action.payload };
    default:
      throw new Error();
  }
}

const MovieRatingsProvider = ({ children }) => {
  const [state, dispatchMovieRatings] = useReducer(reducer, initialState);

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

  function loadMovieRatings() {
    dispatchMovieRatings({ type: "setMovieRatingsStatus", payload: "loading" });
    return fetchMovieRatings()
      .then((json) => {
        const movieRatingsFormatted = formatMovieList(json);
        dispatchMovieRatings({
          type: "setMovieRatings",
          payload: movieRatingsFormatted,
        });
        return movieRatingsFormatted;
      })
      .catch(() => {
        dispatchMovieRatings({
          type: "setMovieRatingsStatus",
          payload: "error",
        });
      });
  }

  useEffect(() => {
    loadMovieRatings();
  }, []);

  const providerValue = useMemo(
    () => ({
      ...state,
      dispatchMovieRatings,
      movieRatingsFiltered,
      movieRatingsPaginated,
      moviesPerDecadeReleased,
      moviesPerRatingGiven,
    }),
    [
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
};

MovieRatingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MovieRatingsProvider, useMovieRatings };
