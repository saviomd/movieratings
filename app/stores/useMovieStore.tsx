import { useParams } from "react-router";

import { letterboxdServices, tmdbServices } from "~/utils";

const useMovieDetailsStore = () => {
  const { movieId } = useParams();

  const { movieDiary } = letterboxdServices.useMovieDiaryQuery();
  const { movieRatings } = letterboxdServices.useMovieRatingsQuery();
  const { movieDetails, movieDetailsStatus } =
    tmdbServices.useMovieDetailsQuery({
      movieDiary,
      movieId,
      movieRatings,
    });

  return {
    movieDetails,
    movieDetailsStatus,
  };
};

export default useMovieDetailsStore;
