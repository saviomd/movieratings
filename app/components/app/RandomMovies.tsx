import { LoadingHandler } from "~/components/library";
import useStatsStore from "~/stores/useStatsStore";

import MoviePosterButton from "./MoviePosterButton";

interface Props {
  randomMovies: ReturnType<typeof useStatsStore>["randomMovies"];
  randomMoviesStatus: ReturnType<typeof useStatsStore>["randomMoviesStatus"];
}

function RandomMovies({ randomMovies, randomMoviesStatus }: Props) {
  return (
    <LoadingHandler
      dataStatus={randomMoviesStatus}
      hasData={!!randomMovies.length}
    >
      <div className="row">
        {randomMovies.map(({ movie_path, name, poster_url }) => (
          <div className="col-6 col-sm-4 mb-3" key={name}>
            <MoviePosterButton
              href={movie_path}
              posterUrl={poster_url}
              title={name}
            />
          </div>
        ))}
      </div>
    </LoadingHandler>
  );
}

export default RandomMovies;
