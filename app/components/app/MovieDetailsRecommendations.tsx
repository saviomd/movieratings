import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MoviePosterButton } from "~/components/app";
import { Button, Carousel, Grid, Heading } from "~/components/library";
import type { MovieDetailsFormatted } from "~/types";

type Props = Pick<
  MovieDetailsFormatted,
  "letterboxdURI" | "recommendations" | "tmdbURI"
>;

function MovieDetailsRecommendations({
  letterboxdURI,
  recommendations,
  tmdbURI,
}: Props) {
  const links = [
    { href: letterboxdURI, name: "Letterboxd" },
    { href: tmdbURI, name: "TMDb" },
  ];

  return (
    <>
      <div className="text-end">
        <div>
          View movie at
          <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
        </div>
        <ul className="list-inline">
          {links.map(({ href, name }) => (
            <li className="list-inline-item" key={name}>
              <Button href={href} size="sm">
                {name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      {recommendations.length && (
        <>
          <Heading level={2}>
            Recommendations
            <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
          </Heading>
          <Carousel>
            {recommendations.map((movie) => (
              <Grid.Col
                as="li"
                key={movie.id}
                width={5}
                widthMd={3}
                widthLg={2}
              >
                <MoviePosterButton
                  href={movie.tmdbURI}
                  posterUrl={movie.poster_url}
                  title={movie.title}
                />
              </Grid.Col>
            ))}
          </Carousel>
        </>
      )}
    </>
  );
}

export default MovieDetailsRecommendations;
