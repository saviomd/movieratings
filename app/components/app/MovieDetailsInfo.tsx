import { Badge, Carousel, Grid, Image } from "~/components/library";
import type { MovieDetailsFormatted } from "~/types";

type Props = Pick<
  MovieDetailsFormatted,
  | "budget"
  | "flatrate"
  | "genres"
  | "production_companies"
  | "production_countries"
  | "release_date"
  | "revenue"
  | "runtime"
  | "spoken_languages"
>;

function MovieDetailsInfo({
  budget,
  flatrate,
  genres,
  production_companies,
  production_countries,
  release_date,
  revenue,
  runtime,
  spoken_languages,
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
      <Carousel>
        <Grid.Col as="li" width="auto">
          <div>Streaming in Brazil on</div>
          {flatrate.length ? (
            <Grid as="ul" gutter={3}>
              {flatrate.map(({ logo_url, provider_name }) => (
                <Grid.Col as="li" key={provider_name} width={4}>
                  <Image src={logo_url} title={provider_name} type="logo" />
                </Grid.Col>
              ))}
            </Grid>
          ) : (
            <div className="fw-bold">None</div>
          )}
        </Grid.Col>
        {info.map(({ title, value }) => (
          <Grid.Col as="li" key={title} width="auto">
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
          </Grid.Col>
        ))}
      </Carousel>
    </>
  );
}

export default MovieDetailsInfo;
