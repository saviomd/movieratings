import React from "react";

import ScrollableHorizontalList from "../../ScrollableHorizontalList";
import { useMovieDetailsContext } from "../../../contexts/MovieDetailsContext";

function MovieDetailsStats() {
  /* eslint-disable camelcase */
  const {
    movieDetails: {
      runtime,
      release_date,
      genres,
      budget,
      revenue,
      production_companies,
      production_countries,
      spoken_languages,
    },
  } = useMovieDetailsContext();
  const stats = [
    { title: "Runtime", value: `${runtime} minutes` },
    { title: "Release date", value: release_date },
    { title: "Genres", value: genres.map(({ name }) => name) },
    { title: "Budget", value: budget },
    { title: "Revenue", value: revenue },
    {
      title: "Production companies",
      value: production_companies.map(({ name }) => name),
    },
    {
      title: "Production countries",
      value: production_countries.map(({ name }) => name),
    },
    {
      title: "Spoken languages",
      value: spoken_languages.map(({ english_name }) => english_name),
    },
  ];
  /* eslint-enable camelcase */
  return (
    <ScrollableHorizontalList>
      {stats.map(({ title, value }) => (
        <li className="col-auto" key={title}>
          <div>{title}</div>
          {Array.isArray(value) ? (
            <ul className="fw-bold list-unstyled mb-0">
              {value.map((item) => (
                <li key={item}>
                  <span className="badge bg-secondary">{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="fw-bold">{value}</div>
          )}
        </li>
      ))}
    </ScrollableHorizontalList>
  );
}

export default MovieDetailsStats;
