import { data } from "react-router";

import type { Route } from "../+types/movie.$id";
import { diary, ratings } from "~/data";
import { formatMovieList, tmdbServices } from "~/utils";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const { id } = params;
  const movieDiary = formatMovieList({ movieList: diary });
  const movieRatings = formatMovieList({ movieList: ratings });

  const movie = [...movieDiary, ...movieRatings].find((item) => item.id === id);

  if (!movie) {
    // eslint-disable-next-line @typescript-eslint/only-throw-error
    throw data("Movie Not Found", { status: 404 });
  }

  const movieDetails = await tmdbServices.queryMovieDetails({ movie });

  if (!movieDetails) {
    // eslint-disable-next-line @typescript-eslint/only-throw-error
    throw data("Movie Not Found", { status: 404 });
  }

  return { movieDetails };
}
