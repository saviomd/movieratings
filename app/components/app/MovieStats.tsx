import { ProgressBar, ScrollableHorizontalList } from "~/components/library";

interface IProps {
  movies: {
    groups: Record<number, number>;
    max: number;
  };
  type:
    | "moviesPerDecadeReleased"
    | "moviesPerRatingGiven"
    | "moviesPerYearWatched";
}

const title = {
  moviesPerDecadeReleased: "Per decade released",
  moviesPerRatingGiven: "Per rating given",
  moviesPerYearWatched: "Per year watched",
};

function MovieStats({ movies, type }: IProps) {
  return (
    <div className="border border-secondary p-3 rounded">
      <h1 className="h5">{title[type]}</h1>
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
  );
}

export default MovieStats;
