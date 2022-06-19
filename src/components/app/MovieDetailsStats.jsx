import React from "react";

import { ScrollableHorizontalList } from "../system";
import { useMovieDetailsContext } from "../../contexts/MovieDetailsContext";

function MovieDetailsStats() {
  /* eslint-disable camelcase */
  const {
    movieDetails: {
      budget,
      flatrate,
      genres,
      production_companies,
      production_countries,
      release_date,
      revenue,
      runtime,
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
  return (
    <ScrollableHorizontalList>
      <li className="col-auto">
        <div>Streaming in Brazil on</div>
        {flatrate.length ? (
          <ul className="list-inline">
            {flatrate.map(({ logo_url, provider_name }) => (
              <li className="list-inline-item" key={provider_name}>
                <img alt={provider_name} height={16 * 3} src={logo_url} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="fw-bold">None</div>
        )}
      </li>
      {stats.map(({ title, value }) => (
        <li className="col-auto" key={title}>
          <div>{title}</div>
          {Array.isArray(value) ? (
            <ul className="fw-bold list-unstyled">
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
  /* eslint-enable camelcase */
}

export default MovieDetailsStats;
