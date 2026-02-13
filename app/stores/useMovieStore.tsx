import { tmdbServices } from "~/utils";

interface IUseMovieDetailsStore {
  movie: Parameters<typeof tmdbServices.useMovieDetailsQuery>[0]["movie"];
}

const useMovieDetailsStore = ({ movie }: IUseMovieDetailsStore) => {
  const { movieDetails, movieDetailsStatus } =
    tmdbServices.useMovieDetailsQuery({ movie });

  return {
    movieDetails,
    movieDetailsStatus,
  };
};

export default useMovieDetailsStore;
