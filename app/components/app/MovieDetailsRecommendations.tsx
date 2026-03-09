import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MoviePosterButton } from "~/components/app";
import {
  Button,
  Heading,
  ScrollableHorizontalList,
} from "~/components/library";
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
          <ScrollableHorizontalList>
            {recommendations.map((movie) => (
              <li className="col-5 col-md-3 col-lg-2" key={movie.id}>
                <MoviePosterButton
                  href={movie.tmdbURI}
                  posterUrl={movie.poster_url}
                  title={movie.title}
                />
              </li>
            ))}
          </ScrollableHorizontalList>
        </>
      )}
    </>
  );
}

export default MovieDetailsRecommendations;
