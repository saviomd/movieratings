import React, { useContext } from "react";

import MovieDetailsContext from "../../contexts/movieDetailsContext";
import LoadingHandler from "../LoadingHandler";
import MovieDetailsBody from "./MovieDetailsBody";
import MovieDetailsHeader from "./MovieDetailsHeader";

const MovieDetails = () => {
  const { movieDetails, movieDetailsStatus } = useContext(MovieDetailsContext);
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
