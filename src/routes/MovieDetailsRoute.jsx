import React from "react";
import { useParams } from "react-router-dom";

import { MovieDetailsProvider } from "src/contexts/MovieDetailsContext";
import { MovieDetails } from "src/components/app";

function PageMovieDetails() {
  const { movieId } = useParams();
  return (
    <MovieDetailsProvider movieId={movieId}>
      <MovieDetails />
    </MovieDetailsProvider>
  );
}

export default PageMovieDetails;
