import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { useMovieDetailsContext } from "../../contexts/MovieDetailsContext";

function MovieDetailsHeader() {
  const { movieDetails } = useMovieDetailsContext();
  return (
    <div className="bg-secondary p-3">
      <h1 className="h3">
        {movieDetails.title}
        <span className="fst-italic ms-2 small">{`(${movieDetails.release_year})`}</span>
        <div className="fst-italic small">
          {movieDetails.br_title}
          {movieDetails.title !== movieDetails.original_title && (
            <div className="fst-italic small">
              ({movieDetails.original_title})
            </div>
          )}
        </div>
      </h1>
      <div className="small">
        {movieDetails.Rating} of 5
        <FontAwesomeIcon className="mx-1 text-warning" icon="star" />
        <span className="small">by me</span>
      </div>
      <div className="small">
        {movieDetails.vote_average} of 10
        <FontAwesomeIcon className="mx-1 text-warning" icon="star" />
        <span className="small">{`by ${movieDetails.vote_count} TMDb users`}</span>
      </div>
    </div>
  );
}

export default MovieDetailsHeader;
