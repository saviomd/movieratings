import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

import MovieDetailsContext from "../../../contexts/MovieDetailsContext";
import ScrollableHorizontalList from "../../ScrollableHorizontalList";

const MovieDetailsCastCrew = () => {
  const { movieDetails } = useContext(MovieDetailsContext);
  if (!movieDetails.credits) {
    return null;
  }
  return (
    <>
      <h2 className="h4">
        Cast
        <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
      </h2>
      {movieDetails.credits.cast.length ? (
        <ScrollableHorizontalList>
          {movieDetails.credits.cast.map((person) => (
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
      {movieDetails.credits.crew.length ? (
        <ScrollableHorizontalList>
          {movieDetails.credits.crew.map((person) => (
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
    </>
  );
};

export default MovieDetailsCastCrew;
