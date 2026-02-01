import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router";

import { useMovieDiaryContext } from "~/contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "~/contexts/MovieRatingsContext";
import { formatMovieDetails, tmdbServices } from "~/utils";

const { getMovieDetails, getSearchMovies } = tmdbServices;

const useMovieDetailsStore = () => {
  const { movieDiary } = useMovieDiaryContext();
  const { movieRatings } = useMovieRatingsContext();
  const { movieId } = useParams();

  const movie = useMemo(
    () => [...movieDiary, ...movieRatings].find(({ Id }) => Id === movieId),
    [movieDiary, movieId, movieRatings],
  );

  const { data: movieDetails, status: movieDetailsStatus } = useQuery({
    queryKey: ["movieDetails", movie, movie?.Name, movie?.Year],
    queryFn: async () => {
      if (movie) {
        const searchMoviesData = await getSearchMovies({
          Name: movie.Name,
          Year: movie.Year,
        });
        const newMovie = searchMoviesData.results.find(
          ({ release_date, title }) =>
            title === movie.Name &&
            release_date.includes(movie.Year.toString()),
        );
        if (newMovie) {
          const movieDetails = await getMovieDetails({ movieId: newMovie.id });
          return formatMovieDetails({ movie, movieDetails });
        }
      }
      return null;
    },
    enabled: !!movie?.Name && !!movie.Year,
  });

  return {
    movieDetails,
    movieDetailsStatus,
  };
};

export default useMovieDetailsStore;
