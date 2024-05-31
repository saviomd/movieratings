import React from "react";

import { useMovieDetailsContext } from "src/contexts/MovieDetailsContext";
import { LoadingHandler } from "src/components/library";
import MovieDetailsBody from "./MovieDetailsBody";
import MovieDetailsHeader from "./MovieDetailsHeader";

function MovieDetails() {
  const { movieDetails, movieDetailsStatus } = useMovieDetailsContext();
  return (
    <LoadingHandler
      dataStatus={movieDetailsStatus}
      hasData={movieDetails.id !== ""}
    >
      <div className="border border-secondary mb-3 rounded">
        <MovieDetailsHeader />
        <MovieDetailsBody />
      </div>
    </LoadingHandler>
  );
}

export default MovieDetails;
