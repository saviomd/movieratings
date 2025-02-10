import {
  LoadingHandler,
  ProgressBar,
  ScrollableHorizontalList,
} from "src/components/library";
import type { DataStatusType } from "src/types";

type PropsType = {
  movies: {
    groups: Record<number, number>;
    max: number;
  };
  moviesStatus: DataStatusType;
  type:
    | "moviesPerDecadeReleased"
    | "moviesPerRatingGiven"
    | "moviesPerYearWatched";
};

const title = {
  moviesPerDecadeReleased: "Per decade released",
  moviesPerRatingGiven: "Per rating given",
  moviesPerYearWatched: "Per year watched",
};

function MovieStats({ movies, moviesStatus, type }: PropsType) {
  return (
    <div className="border border-secondary p-3 rounded">
      <h1 className="h5">{title[type]}</h1>
      <LoadingHandler
        dataStatus={moviesStatus}
        hasData={!!movies.groups}
        messageNoData="noStats"
      >
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
      </LoadingHandler>
    </div>
  );
}

export default MovieStats;
