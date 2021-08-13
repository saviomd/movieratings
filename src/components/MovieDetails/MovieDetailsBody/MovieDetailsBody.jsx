import React, { useContext } from "react";

import MovieDetailsContext from "../../../contexts/MovieDetailsContext";
import Image from "../../Image";
import MovieDetailsCastCrew from "../MovieDetailsCastCrew";
import MovieDetailsRecommendations from "../MovieDetailsRecommendations";

const MovieDetailsBody = () => {
  const { movieDetails } = useContext(MovieDetailsContext);
  return (
    <>
      <div className="p-3">
        <div className="animate__animated animate__fadeInUp mb-3 row">
          <div className="col-6 col-lg-4">
            <Image
              src={movieDetails.poster_url}
              title={movieDetails.title}
              type="poster"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-8 text-end">
            <div className="lead text-start">{movieDetails.overview}</div>
            <div className="mb-3">
              <span className="badge bg-secondary ms-2">
                {movieDetails.original_language}
              </span>
            </div>
            <div className="mb-3">
              <a
                className="btn btn-danger btn-sm"
                href={movieDetails.LetterboxdURI}
                target="_blank"
                rel="noopener noreferrer"
              >
                View movie at Letterboxd
              </a>
            </div>
            <div className="mb-3">
              <a
                className="btn btn-danger btn-sm"
                href={movieDetails.tmdbURI}
                target="_blank"
                rel="noopener noreferrer"
              >
                View movie at TMDB
              </a>
            </div>
          </div>
        </div>
        <MovieDetailsCastCrew />
      </div>
      <Image
        src={movieDetails.backdrop_url}
        title={movieDetails.title}
        type="backdrop"
      />
      <MovieDetailsRecommendations />
    </>
  );
};

export default MovieDetailsBody;
