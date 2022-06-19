import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { memo } from "react";

import { LoadingHandler, ProgressBar } from "../system";

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
      <ul className="list-unstyled">
        {Object.entries(movies.groups)
          .reverse()
          .map(([key, value]) => {
            const text = () => {
              if (type === "moviesPerRatingGiven") {
                const stars = [];
                for (let i = 0; i < key; i += 1) {
                  stars.push(
                    <FontAwesomeIcon
                      key={i}
                      className="me-1 text-warning"
                      icon="star"
                    />
                  );
                }
                return stars;
              }
              return key;
            };
            const width = (value * 100) / movies.max;
            return (
              <li className="mb-2" key={key}>
                <div className="g-0 row">
                  <div className="col">{text()}</div>
                  <div className="col-auto fw-bold">{value}</div>
                </div>
                <ProgressBar width={width} />
              </li>
            );
          })}
      </ul>
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
