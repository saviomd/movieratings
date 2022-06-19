import React from "react";
import { useParams } from "react-router-dom";

import { MovieDetailsProvider } from "../contexts/MovieDetailsContext";
import { useMovieDiaryContext } from "../contexts/MovieDiaryContext";
import { useMovieRatingsContext } from "../contexts/MovieRatingsContext";
import { MovieDetails } from "../components/app";

function PageMovieDetails() {
  const { movieDiary } = useMovieDiaryContext();
  const { movieRatings } = useMovieRatingsContext();
  const { movieId } = useParams();
  const movie = [...movieDiary, ...movieRatings].find(
    (obj) => obj.Id === movieId
  );
  return (
    <MovieDetailsProvider movie={movie}>
      <MovieDetails />
    </MovieDetailsProvider>
  );
}

export default PageMovieDetails;
