import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MoviePosterButton } from "~/components/app";
import { ScrollableHorizontalList } from "~/components/library";
import { formatMovieDetails } from "~/utils";

type formatMovieDetailsReturn = ReturnType<typeof formatMovieDetails>;

interface IProps {
  LetterboxdURI: formatMovieDetailsReturn["LetterboxdURI"];
  recommendations: formatMovieDetailsReturn["recommendations"];
  tmdbURI: formatMovieDetailsReturn["tmdbURI"];
}

function MovieDetailsRecommendations({
  LetterboxdURI,
  recommendations,
  tmdbURI,
}: IProps) {
  const links = [
    { href: LetterboxdURI, name: "Letterboxd" },
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
              <a
                className="btn btn-danger btn-sm"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {recommendations.length && (
        <>
          <h2 className="h4">
            Recommendations
            <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
          </h2>
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
