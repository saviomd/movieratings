import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useMovieContext } from "~/contexts/MovieContext";

function MovieDetailsHeader() {
  const { movieDetails } = useMovieContext();
  if (!movieDetails) {
    return null;
  }
  return (
    <div className="bg-secondary border border-secondary mb-3 p-3 rounded">
      <h1 className="h3">
        {movieDetails.title}
        <span className="fst-italic ms-2 small">{`(${movieDetails.release_year})`}</span>
        <div className="fst-italic small">
          {movieDetails.br_title}
          {movieDetails.title !== movieDetails.original_title && (
            <div className="fst-italic small">
              ({movieDetails.original_title})
            </div>
          )}
        </div>
      </h1>
      <div className="small">
        {movieDetails.Rating} of 5
        <FontAwesomeIcon className="mx-1 text-warning" icon="star" />
        <span className="small">by me</span>
      </div>
      <div className="small">
        {movieDetails.vote_average} of 10
        <FontAwesomeIcon className="mx-1 text-warning" icon="star" />
        <span className="small">{`by ${String(movieDetails.vote_count)} TMDb users`}</span>
      </div>
    </div>
  );
}

export default MovieDetailsHeader;
