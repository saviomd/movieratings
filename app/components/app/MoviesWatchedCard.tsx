import { Card, Grid, LoadingHandler } from "~/components/library";
import type { DataStatus, PosterMovieFormatted } from "~/types";

import MoviePosterButton from "./MoviePosterButton";

interface Props {
  movies: PosterMovieFormatted[];
  status: DataStatus;
  title: string;
}

function MoviesWatchedCard({ movies, status, title }: Props) {
  return (
    <Card title={title}>
      <LoadingHandler dataStatus={status} hasData={!!movies.length}>
        <Grid>
          {movies.map(({ movie_path, name, poster_url }) => (
            <Grid.Col key={name} width={6} widthSm={3}>
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
    </Card>
  );
}

export default MoviesWatchedCard;
