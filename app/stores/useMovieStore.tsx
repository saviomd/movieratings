import { tmdbServices } from "~/utils";

interface IUseMovieStore {
  movie: Parameters<typeof tmdbServices.useMovieDetailsQuery>[0]["movie"];
}

const useMovieStore = ({ movie }: IUseMovieStore) => {
  const { movieDetails, movieDetailsStatus } =
    tmdbServices.useMovieDetailsQuery({ movie });

  return {
    movieDetails,
    movieDetailsStatus,
  };
};

export default useMovieStore;
