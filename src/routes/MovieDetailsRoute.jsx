import React from "react";
import { useParams } from "react-router-dom";

import { MovieDetails } from "src/components/app";
import { MovieDetailsProvider } from "src/contexts/MovieDetailsContext";

function PageMovieDetails() {
  const { movieId } = useParams();
  return (
    <MovieDetailsProvider movieId={movieId}>
      <MovieDetails />
    </MovieDetailsProvider>
  );
}

export default PageMovieDetails;
