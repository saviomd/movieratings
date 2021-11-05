import React from "react";
import { useParams } from "react-router-dom";

import { MovieDetailsProvider } from "../contexts/MovieDetailsContext";
import { useMovieDiary } from "../contexts/MovieDiaryContext";
import { useMovieRatings } from "../contexts/MovieRatingsContext";
import MovieDetails from "../components/MovieDetails";

const PageMovieDetails = () => {
  const { movieDiary } = useMovieDiary();
  const { movieRatings } = useMovieRatings();
  const { movieId } = useParams();
  const movie = [...movieDiary, ...movieRatings].find(
    (obj) => obj.Id === movieId
  );
  return (
    <MovieDetailsProvider movie={movie}>
      <MovieDetails />
    </MovieDetailsProvider>
  );
};

export default PageMovieDetails;
