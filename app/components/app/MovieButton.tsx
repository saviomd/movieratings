import { Button, Rating } from "~/components/library";
import type { MovieLoggedFormatted, MovieType } from "~/types";
import { routePaths } from "~/utils";

interface Props {
  dateFormatted: MovieLoggedFormatted["dateFormatted"];
  id: MovieLoggedFormatted["id"];
  name: MovieLoggedFormatted["name"];
  rating: MovieLoggedFormatted["rating"];
  type: MovieType;
  watchedDateFormatted: MovieLoggedFormatted["watchedDateFormatted"];
  year: MovieLoggedFormatted["year"];
}

function MovieButton({
  dateFormatted,
  id,
  name,
  rating,
  type,
  watchedDateFormatted,
  year,
}: Props) {
  let dateText;
  if (type === "Diary" && watchedDateFormatted) {
    dateText = `watched in ${watchedDateFormatted}`;
  } else if (type === "Ratings" && dateFormatted) {
    dateText = `rated in ${dateFormatted}`;
  }
  return (
    <Button href={routePaths.movie({ id })} isBlock variant="secondary">
      <div className="text-start text-truncate">
        {name}
        <span className="ms-1 small">({year})</span>
      </div>
      <div className="align-items-end row small">
        <div className="col text-start">
          <Rating count={rating} />
        </div>
        <div className="col small text-end">{dateText}</div>
      </div>
    </Button>
  );
}

export default MovieButton;
