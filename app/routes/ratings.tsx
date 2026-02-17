import type { Route } from "./+types/ratings";
import MoviesLayout from "./layouts/moviesLayout";
import { loader } from "./loaders/ratingsLoader";
import { PageMetadata } from "~/components/library";
import useMovieListStore from "~/stores/useMovieListStore";

export { loader };

export default function Home({ loaderData }: Route.ComponentProps) {
  const store = useMovieListStore({ movieList: loaderData.movieRatings });

  return (
    <>
      <PageMetadata />
      <MoviesLayout store={store} type="Ratings" />
    </>
  );
}
