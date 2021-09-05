import React from "react";

import { useMovieDetails } from "../../contexts/MovieDetailsContext";
import LoadingHandler from "../LoadingHandler";
import MovieDetailsBody from "./MovieDetailsBody";
import MovieDetailsHeader from "./MovieDetailsHeader";

const MovieDetails = () => {
  const { movieDetails, movieDetailsStatus } = useMovieDetails();
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
};

export default MovieDetails;
