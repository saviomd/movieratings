import { Carousel, Grid, Heading, ProgressBar } from "~/components/library";
import { loader } from "~/routes/loaders/statsLoader";

interface Props {
  moviesPerDecadeReleased: ReturnType<typeof loader>["moviesPerDecadeReleased"];
  moviesPerRatingGiven: ReturnType<typeof loader>["moviesPerRatingGiven"];
  moviesPerYearWatched: ReturnType<typeof loader>["moviesPerYearWatched"];
}

function MovieStats({
  moviesPerDecadeReleased,
  moviesPerRatingGiven,
  moviesPerYearWatched,
}: Props) {
  const stats = [
    {
      movies: moviesPerYearWatched,
      title: "Per year watched",
      type: "moviesPerYearWatched",
    },
    {
      movies: moviesPerRatingGiven,
      title: "Per rating given",
      type: "moviesPerRatingGiven",
    },
    {
      movies: moviesPerDecadeReleased,
      title: "Per decade released",
      type: "moviesPerDecadeReleased",
    },
  ];

  return (
    <>
      <Heading level={1}>Stats</Heading>
      {stats.map(({ movies, title, type }) => (
        <div className="border border-secondary mb-3 p-3 rounded" key={type}>
          <Heading level={2}>{title}</Heading>
          <div className="text-center">
            <Carousel>
              {Object.entries(movies.groups).map(([key, value]) => {
                const size = (value * 100) / movies.max;
                return (
                  <Grid.Col as="li" key={key} width="equal">
                    <ProgressBar size={size} />
                    <div>{key}</div>
                    <div className="fw-bold">{value}</div>
                  </Grid.Col>
                );
              })}
            </Carousel>
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieStats;
