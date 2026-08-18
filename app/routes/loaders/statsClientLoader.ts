import type { Route } from "../+types/stats";
import { getRandomMovies, tmdbServices } from "~/utils";

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  const {
    lastFourWatched,
    movieRatings,
    moviesPerDecadeReleased,
    moviesPerRatingGiven,
    moviesPerYearWatched,
  } = await serverLoader();

  const randomMovies = await tmdbServices.queryMoviePosters({
    movies: getRandomMovies({ movieRatings }),
    queryKey: "randomMovies",
  });

  return {
    lastFourWatched,
    moviesPerDecadeReleased,
    moviesPerRatingGiven,
    moviesPerYearWatched,
    randomMovies,
  };
}

clientLoader.hydrate = true as const;
