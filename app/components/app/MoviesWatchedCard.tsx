import { Card, Grid } from "~/components/library";
import type { PosterMovieFormatted } from "~/types";

import MoviePosterButton from "./MoviePosterButton";

interface Props {
  movies: PosterMovieFormatted[];
  title: string;
}

function MoviesWatchedCard({ movies, title }: Props) {
  return (
    <Card title={title}>
      <Grid>
        {movies.map(({ movie_path, name, poster_url, rating, year }) => (
          <Grid.Col key={name} width={6} widthSm={3}>
            <div className="mb-3">
              <MoviePosterButton
                href={movie_path}
                posterUrl={poster_url}
                rating={rating}
                title={name}
                year={year}
              />
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </Card>
  );
}

export default MoviesWatchedCard;
