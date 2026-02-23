import { ProgressBar, ScrollableHorizontalList } from "~/components/library";
import { loader } from "~/routes/loaders/statsLoader";

interface IProps {
  moviesPerDecadeReleased: ReturnType<typeof loader>["moviesPerDecadeReleased"];
  moviesPerRatingGiven: ReturnType<typeof loader>["moviesPerRatingGiven"];
  moviesPerYearWatched: ReturnType<typeof loader>["moviesPerYearWatched"];
}

function MovieStats({
  moviesPerDecadeReleased,
  moviesPerRatingGiven,
  moviesPerYearWatched,
}: IProps) {
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
      <h1 className="h4">Stats</h1>
      {stats.map(({ movies, title, type }) => (
        <div className="border border-secondary mb-3 p-3 rounded" key={type}>
          <h1 className="h5">{title}</h1>
          <ScrollableHorizontalList>
            {Object.entries(movies.groups).map(([key, value]) => {
              const size = (value * 100) / movies.max;
              return (
                <li className="col text-center" key={key}>
                  <ProgressBar size={size} />
                  <div>{key}</div>
                  <div className="fw-bold">{value}</div>
                </li>
              );
            })}
          </ScrollableHorizontalList>
        </div>
      ))}
    </>
  );
}

export default MovieStats;
