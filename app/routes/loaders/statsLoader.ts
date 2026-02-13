import diary from "~/data/diary.json";
import ratings from "~/data/ratings.json";
import { formatMovieList, getRandomMovies } from "~/utils";

type DecadeGroupType = Record<string, number>;

type RatingGroupType = Record<number, number>;

type YearGroupType = Record<string, number>;

export default function statsLoader() {
  const movieDiary = formatMovieList({ movieList: diary });
  const movieRatings = formatMovieList({ movieList: ratings });

  const moviesPerDecadeReleased = (() => {
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
  })();

  const moviesPerRatingGiven = (() => {
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
  })();

  const moviesPerYearWatched = (() => {
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
  })();

  const randomMoviesLogged = getRandomMovies({ movieRatings, count: 6 });

  return {
    moviesPerDecadeReleased,
    moviesPerRatingGiven,
    moviesPerYearWatched,
    randomMoviesLogged,
  };
}
