import { Button, Rating } from "~/components/library";
import type { IMovieLoggedFormatted, MovieType } from "~/types";
import { routePaths } from "~/utils";

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
    <Button
      href={routePaths.movie({ id: movie.Id })}
      isBlock
      variant="secondary"
    >
      <div className="text-start text-truncate">
        {movie.Name}
        <span className="ms-1 small">({movie.Year})</span>
      </div>
      <div className="align-items-end row small">
        <div className="col text-start">
          <Rating count={movie.Rating} />
        </div>
        <div className="col small text-end">{dateText}</div>
      </div>
    </Button>
  );
}

export default MovieButton;
