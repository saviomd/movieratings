import { Button, Grid, Rating } from "~/components/library";
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
      <div className="small">
        <Grid alignItems="end">
          <Grid.Col width="equal">
            <div className="text-start">
              <Rating count={rating} />
            </div>
          </Grid.Col>
          <Grid.Col width="auto">
            <div className="small">{dateText}</div>
          </Grid.Col>
        </Grid>
      </div>
    </Button>
  );
}

export default MovieButton;
