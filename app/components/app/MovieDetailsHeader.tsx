import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatMovieDetails } from "~/utils";

type formatMovieDetailsReturn = ReturnType<typeof formatMovieDetails>;

interface IProps {
  br_title: formatMovieDetailsReturn["br_title"];
  original_title: formatMovieDetailsReturn["original_title"];
  Rating: formatMovieDetailsReturn["Rating"];
  release_year: formatMovieDetailsReturn["release_year"];
  title: formatMovieDetailsReturn["title"];
  vote_average: formatMovieDetailsReturn["vote_average"];
  vote_count: formatMovieDetailsReturn["vote_count"];
}

function MovieDetailsHeader({
  br_title,
  original_title,
  Rating,
  release_year,
  title,
  vote_average,
  vote_count,
}: IProps) {
  return (
    <div className="bg-secondary border border-secondary mb-3 p-3 rounded">
      <h1 className="h3">
        {title}
        <span className="fst-italic ms-2 small">{`(${release_year})`}</span>
        <div className="fst-italic small">
          {br_title}
          {title !== original_title && (
            <div className="fst-italic small">({original_title})</div>
          )}
        </div>
      </h1>
      <div className="small">
        {Rating} of 5
        <FontAwesomeIcon className="mx-1 text-warning" icon="star" />
        <span className="small">by me</span>
      </div>
      <div className="small">
        {vote_average} of 10
        <FontAwesomeIcon className="mx-1 text-warning" icon="star" />
        <span className="small">{`by ${String(vote_count)} TMDb users`}</span>
      </div>
    </div>
  );
}

export default MovieDetailsHeader;
