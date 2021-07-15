import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

import movieCreditsContext from "../../../contexts/movieCreditsContext";
import LoadingHandler from "../../LoadingHandler";
import ScrollableHorizontalList from "../../ScrollableHorizontalList";

const MovieInfoCastCrew = () => {
  const { movieCredits, movieCreditsStatus } = useContext(movieCreditsContext);
  return (
    <LoadingHandler dataStatus={movieCreditsStatus} hasData={!!movieCredits.id}>
      <h2 className="h4">
        Cast
        <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
      </h2>
      {movieCredits.cast.length ? (
        <ScrollableHorizontalList>
          {movieCredits.cast.map((person) => (
            <li className="col-auto" key={person.credit_id}>
              <a
                className="btn btn-secondary btn-sm"
                href={person.tmdbURI}
                rel="noopener noreferrer"
                target="_blank"
              >
                {person.name}
                <div className="small">{person.character}</div>
              </a>
            </li>
          ))}
        </ScrollableHorizontalList>
      ) : (
        <p>No data available</p>
      )}
      <h2 className="h4">
        Crew
        <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
      </h2>
      {movieCredits.crew.length ? (
        <ScrollableHorizontalList>
          {movieCredits.crew.map((person) => (
            <li className="col-auto" key={person.credit_id}>
              <a
                className="btn btn-secondary btn-sm"
                href={person.tmdbURI}
                rel="noopener noreferrer"
                target="_blank"
              >
                {person.name}
                <div className="small">{person.job}</div>
              </a>
            </li>
          ))}
        </ScrollableHorizontalList>
      ) : (
        <p>No data available</p>
      )}
    </LoadingHandler>
  );
};

export default MovieInfoCastCrew;
