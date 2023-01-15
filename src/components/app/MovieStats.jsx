import PropTypes from "prop-types";
import React, { memo } from "react";

import {
  LoadingHandler,
  ProgressBar,
  ScrollableHorizontalList,
} from "../library";

const title = {
  moviesPerDecadeReleased: "Per decade released",
  moviesPerRatingGiven: "Per rating given",
  moviesPerYearWatched: "Per year watched",
};

const MovieStats = memo(({ movies, moviesStatus, type }) => (
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
));

MovieStats.propTypes = {
  movies: PropTypes.shape({
    groups: PropTypes.shape({
      decade: PropTypes.string,
      rating: PropTypes.string,
      year: PropTypes.string,
    }).isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  moviesStatus: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieStats;
