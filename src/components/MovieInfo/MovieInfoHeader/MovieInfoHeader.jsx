import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

import movieInfoContext from "../../../contexts/movieInfoContext";

const MovieInfoHeader = () => {
  const { movieInfo } = useContext(movieInfoContext);
  return (
    <div className="bg-secondary p-3">
      <h1 className="h3">
        {movieInfo.title}
        <span className="font-italic ms-2 small">{`(${movieInfo.release_year}${
          movieInfo.title !== movieInfo.original_title
            ? `, "${movieInfo.original_title}"`
            : ""
        })`}</span>
      </h1>
      <div className="small">
        {movieInfo.Rating} of 5
        <FontAwesomeIcon className="mx-1 text-warning" icon="star" />
        <span className="small">by me</span>
      </div>
      <div className="small">
        {movieInfo.vote_average} of 10
        <FontAwesomeIcon className="mx-1 text-warning" icon="star" />
        <span className="small">{`by ${movieInfo.vote_count} TMDb users`}</span>
      </div>
    </div>
  );
};

export default MovieInfoHeader;
