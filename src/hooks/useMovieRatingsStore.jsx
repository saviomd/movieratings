import { useQuery } from "@tanstack/react-query";
import { useMemo, useReducer } from "react";

import {
  fetchMovieRatings,
  filterMoviesByName,
  formatMovieList,
} from "src/utils";

const initialState = {
  movieRatingsPage: 1,
  movieRatingsSearchString: "",
};

function reducer(state, { payload, type }) {
  switch (type) {
    case "SET_MOVIE_RATINGS_PAGE":
      return { ...state, movieRatingsPage: state.movieRatingsPage + 1 };
    case "SET_MOVIE_RATINGS_SEARCH_STRING":
      return { ...state, movieRatingsSearchString: payload.toLowerCase() };
    default:
      throw new Error();
  }
}

const useMovieRatingsStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const boundActions = useMemo(
    () => ({
      setMovieRatingsPage: () => dispatch({ type: "SET_MOVIE_RATINGS_PAGE" }),
      setMovieRatingsSearchString: (payload) =>
        dispatch({ type: "SET_MOVIE_RATINGS_SEARCH_STRING", payload }),
    }),
    [],
  );

  const { data: movieRatings = [], status: movieRatingsStatus } = useQuery({
    queryKey: ["movieRatings"],
    queryFn: async () => {
      const movieList = await fetchMovieRatings();
      return formatMovieList({ movieList });
    },
  });

  const movieRatingsFiltered = useMemo(
    () =>
      filterMoviesByName({
        movieList: movieRatings,
        value: state.movieRatingsSearchString,
      }),
    [movieRatings, state.movieRatingsSearchString],
  );

  const movieRatingsPaginated = useMemo(() => {
    const size = state.movieRatingsPage * 100;
    return movieRatingsFiltered.slice(0, size);
  }, [movieRatingsFiltered, state.movieRatingsPage]);

  const moviesPerDecadeReleased = useMemo(() => {
    const groups = movieRatings.reduce((acc, curr) => {
      const decade = `${curr.Year.toString().substr(0, 3)}0`;
      acc[decade] = acc[decade] ? (acc[decade] += 1) : (acc[decade] = 1);
      return acc;
    }, {});
    let max = 0;
    Object.values(groups).forEach((decade) => {
      max = decade > max ? decade : max;
    });
    return { groups, max };
  }, [movieRatings]);

  const moviesPerRatingGiven = useMemo(() => {
    const groups = movieRatings.reduce((acc, curr) => {
      const rating = curr.Rating;
      acc[rating] = acc[rating] ? (acc[rating] += 1) : (acc[rating] = 1);
      return acc;
    }, {});
    let max = 0;
    Object.values(groups).forEach((rating) => {
      max = rating > max ? rating : max;
    });
    return { groups, max };
  }, [movieRatings]);

  return {
    ...state,
    boundActions,
    movieRatings,
    movieRatingsFiltered,
    movieRatingsPaginated,
    movieRatingsStatus,
    moviesPerDecadeReleased,
    moviesPerRatingGiven,
  };
};

export default useMovieRatingsStore;
