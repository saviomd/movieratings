import { useMemo } from "react";

import { letterboxdServices, tmdbServices } from "~/utils";

type DecadeGroupType = Record<string, number>;

type RatingGroupType = Record<number, number>;

type YearGroupType = Record<string, number>;

const useStatsStore = () => {
  const { movieDiary, movieDiaryStatus } =
    letterboxdServices.useMovieDiaryQuery();
  const { movieRatings, movieRatingsStatus } =
    letterboxdServices.useMovieRatingsQuery();
  const { randomMovies, randomMoviesStatus } =
    tmdbServices.useRandomMoviesQuery({ movieRatings });

  const moviesPerDecadeReleased = useMemo(() => {
    const groups = movieRatings.reduce<DecadeGroupType>((acc, curr) => {
      const decade = `${curr.Year.toString().slice(0, 3)}0`;
      acc[decade] = acc[decade] ? acc[decade] + 1 : 1;
      return acc;
    }, {});
    let max = 0;
    for (const decade of Object.values(groups)) {
      max = Math.max(decade, max);
    }
    return { groups, max };
  }, [movieRatings]);

  const moviesPerRatingGiven = useMemo(() => {
    const groups = movieRatings.reduce<RatingGroupType>((acc, curr) => {
      const rating = curr.Rating;
      acc[rating] = acc[rating] ? acc[rating] + 1 : 1;
      return acc;
    }, {});
    let max = 0;
    for (const rating of Object.values(groups)) {
      max = Math.max(rating, max);
    }
    return { groups, max };
  }, [movieRatings]);

  const moviesPerYearWatched = useMemo(() => {
    const groups = movieDiary.reduce<YearGroupType>((acc, curr) => {
      const year = curr.WatchedDate?.split("-")[0] ?? "";
      acc[year] = acc[year] ? acc[year] + 1 : 1;
      return acc;
    }, {});
    let max = 0;
    for (const year of Object.values(groups)) {
      max = Math.max(year, max);
    }
    return { groups, max };
  }, [movieDiary]);

  return {
    movieDiaryStatus,
    movieRatingsStatus,
    moviesPerDecadeReleased,
    moviesPerRatingGiven,
    moviesPerYearWatched,
    randomMovies,
    randomMoviesStatus,
  };
};

export default useStatsStore;
