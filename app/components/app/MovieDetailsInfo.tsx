import { Badge, Image, ScrollableHorizontalList } from "~/components/library";
import type { MovieDetailsFormatted } from "~/types";

type Props = Pick<
  MovieDetailsFormatted,
  | "budget"
  | "flatrate"
  | "genres"
  | "overview"
  | "production_companies"
  | "production_countries"
  | "release_date"
  | "revenue"
  | "runtime"
  | "spoken_languages"
  | "title"
> & {
  posters: MovieDetailsFormatted["images"]["posters"];
};

function MovieDetailsInfo({
  budget,
  flatrate,
  genres,
  overview,
  posters,
  production_companies,
  production_countries,
  release_date,
  revenue,
  runtime,
  spoken_languages,
  title,
}: Props) {
  const info = [
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
    <>
      <div className="animate__animated animate__fadeInUp mb-3 row">
        <div className="col-10 col-md-6 col-lg-5 mb-3">
          {!!posters.length && (
            <ScrollableHorizontalList>
              {posters.map(({ url }) => (
                <li className="col-11" key={url}>
                  <Image src={url} title={title} type="poster" />
                </li>
              ))}
            </ScrollableHorizontalList>
          )}
        </div>
        <div className="col-12 col-md-6 col-lg-7">
          <div className="lead mb-3">{overview}</div>
          <ScrollableHorizontalList>
            <li className="col-auto">
              <div>Streaming in Brazil on</div>
              {flatrate.length ? (
                <ul className="g-3 list-unstyled row">
                  {flatrate.map(({ logo_url, provider_name }) => (
                    <li className="col-4" key={provider_name}>
                      <Image src={logo_url} title={provider_name} type="logo" />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="fw-bold">None</div>
              )}
            </li>
            {info.map(({ title, value }) => (
              <li className="col-auto" key={title}>
                <div>{title}</div>
                {Array.isArray(value) ? (
                  <ul className="fw-bold list-unstyled">
                    {value.map((item) => (
                      <li key={item}>
                        <Badge>{item}</Badge>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="fw-bold">{value}</div>
                )}
              </li>
            ))}
          </ScrollableHorizontalList>
        </div>
      </div>
    </>
  );
}

export default MovieDetailsInfo;
