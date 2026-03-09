import type { MovieLoggedFormatted } from "~/types";

interface IMovieRoutePath {
  id: MovieLoggedFormatted["id"];
}

const routePaths = {
  diary: () => "/diary",
  manifest: () => "/manifest.json",
  movie: ({ id }: IMovieRoutePath) => `/movie/${id}`,
  ratings: () => "/",
  stats: () => "/stats",
};

export default routePaths;
