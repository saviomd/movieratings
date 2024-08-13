import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { useMovieDetailsContext } from "src/contexts/MovieDetailsContext";
import { Image, ScrollableHorizontalList } from "src/components/library";
import MovieDetailsCastCrew from "./MovieDetailsCastCrew";
import MovieDetailsStats from "./MovieDetailsStats";

function MovieDetailsBody() {
  const { movieDetails } = useMovieDetailsContext();
  const links = [
    { href: "LetterboxdURI", name: "Letterboxd" },
    { href: "tmdbURI", name: "TMDb" },
  ];
  return (
    <>
      <div className="animate__animated animate__fadeInUp mb-3 row">
        <div className="col-10 col-md-6 col-lg-5 mb-3">
          {movieDetails.images.posters.length && (
            <ScrollableHorizontalList>
              {movieDetails.images.posters.map(({ url }) => (
                <li className="col-11" key={url}>
                  <Image src={url} title={movieDetails.title} type="poster" />
                </li>
              ))}
            </ScrollableHorizontalList>
          )}
        </div>
        <div className="col-12 col-md-6 col-lg-7">
          <div className="lead mb-3">{movieDetails.overview}</div>
          <MovieDetailsStats />
        </div>
      </div>
      <MovieDetailsCastCrew />
      {movieDetails.tagline && (
        <blockquote className="blockquote px-5 text-center">{`"${movieDetails.tagline}"`}</blockquote>
      )}
      {movieDetails.images.backdrops.length && (
        <ScrollableHorizontalList>
          {movieDetails.images.backdrops.map(({ url }) => (
            <li className="col-11" key={url}>
              <Image src={url} title={movieDetails.title} type="backdrop" />
            </li>
          ))}
        </ScrollableHorizontalList>
      )}
      <div className="text-end">
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
    </>
  );
}

export default MovieDetailsBody;
