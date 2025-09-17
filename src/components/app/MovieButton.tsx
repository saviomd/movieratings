import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

import type { IMovieLoggedFormatted, MovieType } from "src/types";

interface IProps {
  movie: IMovieLoggedFormatted;
  type: MovieType;
}

function MovieButton({ movie, type }: IProps) {
  let dateText;
  if (type === "Diary" && movie.WatchedDateFormatted) {
    dateText = `watched in ${movie.WatchedDateFormatted}`;
  } else if (type === "Ratings" && movie.DateFormatted) {
    dateText = `rated in ${movie.DateFormatted}`;
  }
  return (
    <Link className="btn btn-secondary d-block" to={`/movie/${movie.Id}`}>
      <div className="text-start text-truncate">
        {movie.Name}
        <span className="ms-1 small">({movie.Year})</span>
      </div>
      <div className="align-items-end row small">
        <div className="col text-start text-warning">
          {Array.from(Array(movie.Rating).keys()).map((item) => (
            <FontAwesomeIcon key={item} className="me-1" icon="star" />
          ))}
        </div>
        <div className="col small text-end">{dateText}</div>
      </div>
    </Link>
  );
}

export default MovieButton;
