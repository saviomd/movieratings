import React, { useContext } from "react";

import { MovieCreditsStore } from "../../../contexts/movieCreditsContext";
import { MovieRecommendationsStore } from "../../../contexts/movieRecommendationsContext";
import movieInfoContext from "../../../contexts/movieInfoContext";
import Image from "../../Image";
import MovieInfoCastCrew from "../MovieInfoCastCrew";
import MovieInfoRecommendations from "../MovieInfoRecommendations";

const MovieInfoBody = () => {
  const { movieInfo } = useContext(movieInfoContext);
  return (
    <>
      <div className="p-3">
        <div className="animate__animated animate__fadeInUp mb-3 row">
          <div className="col-6 col-lg-4">
            <Image
              src={movieInfo.poster_url}
              title={movieInfo.title}
              type="poster"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-8 text-end">
            <div className="lead text-start">{movieInfo.overview}</div>
            <div className="mb-3">
              <span className="badge bg-secondary ms-2">
                {movieInfo.original_language}
              </span>
            </div>
            <div className="mb-3">
              <a
                className="btn btn-danger btn-sm"
                href={movieInfo.LetterboxdURI}
                target="_blank"
                rel="noopener noreferrer"
              >
                View movie at Letterboxd
              </a>
            </div>
            <div className="mb-3">
              <a
                className="btn btn-danger btn-sm"
                href={movieInfo.tmdbURI}
                target="_blank"
                rel="noopener noreferrer"
              >
                View movie at TMDB
              </a>
            </div>
          </div>
        </div>
        <MovieCreditsStore movieId={movieInfo.id}>
          <MovieInfoCastCrew />
        </MovieCreditsStore>
      </div>
      <Image
        src={movieInfo.backdrop_url}
        title={movieInfo.title}
        type="backdrop"
      />
      <MovieRecommendationsStore movieId={movieInfo.id}>
        <MovieInfoRecommendations />
      </MovieRecommendationsStore>
    </>
  );
};

export default MovieInfoBody;
