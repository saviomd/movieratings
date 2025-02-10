import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useMovieDetailsContext } from "src/contexts/MovieDetailsContext";
import { MoviePosterButton } from "src/components/app";
import { ScrollableHorizontalList } from "src/components/library";

function MovieDetailsRecommendations() {
  const { movieDetails } = useMovieDetailsContext();
  if (!movieDetails?.recommendations.length) {
    return null;
  }
  return (
    <>
      <h2 className="h4">
        Recommendations
        <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
      </h2>
      <ScrollableHorizontalList>
        {movieDetails.recommendations.map((movie) => (
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
  );
}

export default MovieDetailsRecommendations;
