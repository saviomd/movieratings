import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

import movieRecommendationsContext from "../../../contexts/movieRecommendationsContext";
import Anchor from "../../Anchor";
import Image from "../../Image";
import LoadingHandler from "../../LoadingHandler";
import ScrollableHorizontalList from "../../ScrollableHorizontalList";

const MovieInfoRecommendations = () => {
  const { movieRecommendations, movieRecommendationsStatus } = useContext(
    movieRecommendationsContext
  );
  return (
    <LoadingHandler
      dataStatus={movieRecommendationsStatus}
      hasData={!!movieRecommendations.length}
    >
      <div className="p-3">
        <h2 className="h4">
          Recommendations
          <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
        </h2>
        <ScrollableHorizontalList>
          {movieRecommendations.map((movie) => (
            <li className="col-5 col-md-3 col-lg-2" key={movie.id}>
              <Anchor href={movie.tmdbURI} target="_blank">
                <Image
                  src={movie.poster_url}
                  title={movie.title}
                  type="poster"
                />
                {movie.title}
              </Anchor>
            </li>
          ))}
        </ScrollableHorizontalList>
      </div>
    </LoadingHandler>
  );
};

export default MovieInfoRecommendations;
