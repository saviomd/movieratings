import { useMemo, useReducer } from "react";

import { filterMoviesByName, formatMovieList } from "src/utils";

const initialState = {
  movieRatings: [],
  movieRatingsPage: 1,
  movieRatingsSearchString: "",
  movieRatingsStatus: "",
};

function reducer(state, { payload, type }) {
  switch (type) {
    case "SET_MOVIE_RATINGS":
      return {
        ...state,
        movieRatings: formatMovieList({ movieList: payload }),
        movieRatingsStatus: "loaded",
      };
    case "SET_MOVIE_RATINGS_PAGE":
      return { ...state, movieRatingsPage: state.movieRatingsPage + 1 };
    case "SET_MOVIE_RATINGS_SEARCH_STRING":
      return {
        ...state,
        movieRatingsSearchString: payload.toLowerCase(),
      };
    case "SET_MOVIE_RATINGS_STATUS":
      return { ...state, movieRatingsStatus: payload };
    default:
      throw new Error();
  }
}

const useMovieRatingsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const boundActions = useMemo(
    () => ({
      setMovieRatings: (payload) =>
        dispatch({ type: "SET_MOVIE_RATINGS", payload }),
      setMovieRatingsPage: () => dispatch({ type: "SET_MOVIE_RATINGS_PAGE" }),
      setMovieRatingsSearchString: (payload) =>
        dispatch({ type: "SET_MOVIE_RATINGS_SEARCH_STRING", payload }),
      setMovieRatingsStatus: (payload) =>
        dispatch({ type: "SET_MOVIE_RATINGS_STATUS", payload }),
    }),
    [],
  );

  const movieRatingsFiltered = useMemo(
    () =>
      filterMoviesByName({
        movieList: state.movieRatings,
        value: state.movieRatingsSearchString,
      }),
    [state.movieRatings, state.movieRatingsSearchString],
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

  return {
    ...state,
    boundActions,
    movieRatingsFiltered,
    movieRatingsPaginated,
    moviesPerDecadeReleased,
    moviesPerRatingGiven,
  };
};

export default useMovieRatingsStore;
