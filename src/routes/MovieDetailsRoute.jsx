import React from "react";

import { MovieDetails } from "src/components/app";
import { MovieDetailsProvider } from "src/contexts/MovieDetailsContext";

function PageMovieDetails() {
  return (
    <MovieDetailsProvider>
      <MovieDetails />
    </MovieDetailsProvider>
  );
}

export default PageMovieDetails;
