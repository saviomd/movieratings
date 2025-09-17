import { Image, ScrollableHorizontalList } from "src/components/library";
import { useMovieDetailsContext } from "src/contexts/MovieDetailsContext";

function MovieDetailsStats() {
  const { movieDetails } = useMovieDetailsContext();
  if (!movieDetails) {
    return null;
  }
  const {
    budget,
    flatrate = [],
    genres = [],
    production_companies = [],
    production_countries = [],
    release_date,
    revenue,
    runtime,
    spoken_languages = [],
  } = movieDetails;
  const stats = [
    { title: "Runtime", value: `${String(runtime)} minutes` },
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
                <Image src={logo_url} title={provider_name} type="logo" />
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
}

export default MovieDetailsStats;
