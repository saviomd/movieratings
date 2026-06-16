import { Card, Carousel, Grid, ProgressBar } from "~/components/library";
import { loader } from "~/routes/loaders/statsLoader";

interface Props {
  list:
    | ReturnType<typeof loader>["moviesPerDecadeReleased"]
    | ReturnType<typeof loader>["moviesPerRatingGiven"]
    | ReturnType<typeof loader>["moviesPerYearWatched"];
  title: string;
}

function MovieStats({ list, title }: Props) {
  return (
    <Card title={title}>
      <Carousel>
        {Object.entries(list.groups).map(([key, value]) => (
          <Grid.Col as="li" key={key} width="auto">
            <ProgressBar label={key} total={list.max} value={value} />
          </Grid.Col>
        ))}
      </Carousel>
    </Card>
  );
}

export default MovieStats;
