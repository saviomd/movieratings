import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { useMovieDetailsContext } from "../../../contexts/MovieDetailsContext";
import Anchor from "../../Anchor";
import Image from "../../Image";
import ScrollableHorizontalList from "../../ScrollableHorizontalList";

function MovieDetailsCastCrew() {
  const { movieDetails } = useMovieDetailsContext();
  if (!movieDetails.credits) {
    return null;
  }
  return ["cast", "crew"].map((item) => (
    <React.Fragment key={item}>
      <h2 className="h4">
        {`${item[0].toUpperCase()}${item.slice(1)}`}
        <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
      </h2>
      {movieDetails.credits[item].length ? (
        <ScrollableHorizontalList>
          {movieDetails.credits[item].map((person) => (
            <li className="col-5 col-sm-3 col-md-2" key={person.id}>
              <Anchor href={person.tmdbURI} target="_blank">
                <Image
                  src={person.profile_url}
                  title={person.name}
                  type="profile"
                />
                {person.name}
                <div className="fst-italic small">
                  {person.character || person.job?.join(" / ")}
                </div>
              </Anchor>
            </li>
          ))}
        </ScrollableHorizontalList>
      ) : (
        <p>No data available</p>
      )}
    </React.Fragment>
  ));
}

export default MovieDetailsCastCrew;
