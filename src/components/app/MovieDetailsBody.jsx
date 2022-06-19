import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { useMovieDetailsContext } from "../../contexts/MovieDetailsContext";
import { Image } from "../system";
import MovieDetailsCastCrew from "./MovieDetailsCastCrew";
import MovieDetailsRecommendations from "./MovieDetailsRecommendations";
import MovieDetailsStats from "./MovieDetailsStats";

function MovieDetailsBody() {
  const { movieDetails } = useMovieDetailsContext();
  const links = [
    { href: "LetterboxdURI", name: "Letterboxd" },
    { href: "tmdbURI", name: "TMDb" },
  ];
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
          <div className="col-12 col-sm-6 col-lg-8 lead">
            {movieDetails.overview}
          </div>
        </div>
        <MovieDetailsStats />
        <MovieDetailsCastCrew />
        {movieDetails.tagline && (
          <blockquote className="blockquote px-5 text-center">{`"${movieDetails.tagline}"`}</blockquote>
        )}
      </div>
      <Image
        src={movieDetails.backdrop_url}
        title={movieDetails.title}
        type="backdrop"
      />
      <div className="p-3 text-end">
        <div>
          View movie at
          <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
        </div>
        <ul className="list-inline">
          {links.map(({ href, name }) => (
            <li className="list-inline-item" key={name}>
              <a
                className="btn btn-danger btn-sm"
                href={movieDetails[href]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <MovieDetailsRecommendations />
    </>
  );
}

export default MovieDetailsBody;
