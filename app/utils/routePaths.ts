import type { IMovieLoggedFormatted } from "~/types";

interface IMovieRoutePath {
  id: IMovieLoggedFormatted["id"];
}

const routePaths = {
  diary: () => "/diary",
  manifest: () => "/manifest.json",
  movie: ({ id }: IMovieRoutePath) => `/movie/${id}`,
  ratings: () => "/",
  stats: () => "/stats",
};

export default routePaths;
