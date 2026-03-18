import { Grid, LoadingHandler } from "~/components/library";
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
      <Grid>
        {randomMovies.map(({ movie_path, name, poster_url }) => (
          <Grid.Col key={name} width={6} widthSm={4}>
            <div className="mb-3">
              <MoviePosterButton
                href={movie_path}
                posterUrl={poster_url}
                title={name}
              />
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </LoadingHandler>
  );
}

export default RandomMovies;
