import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { useMovieDetailsContext } from "../../contexts/MovieDetailsContext";
import { Anchor, Image, ScrollableHorizontalList } from "../system";

function MovieDetailsRecommendations() {
  const { movieDetails } = useMovieDetailsContext();
  if (!movieDetails.recommendations.length) {
    return null;
  }
  return (
    <div className="p-3">
      <h2 className="h4">
        Recommendations
        <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
      </h2>
      <ScrollableHorizontalList>
        {movieDetails.recommendations.map((movie) => (
          <li className="col-5 col-md-3 col-lg-2" key={movie.id}>
            <Anchor href={movie.tmdbURI} target="_blank">
              <Image src={movie.poster_url} title={movie.title} type="poster" />
              {movie.title}
            </Anchor>
          </li>
        ))}
      </ScrollableHorizontalList>
    </div>
  );
}

export default MovieDetailsRecommendations;
