import type { Route } from "./+types/diary";
import { loader } from "./loaders/diaryLoader";
import MoviesLayout from "./layouts/moviesLayout";
import { PageMetadata } from "~/components/library";
import useMovieListStore from "~/stores/useMovieListStore";

export { loader };

export default function Diary({ loaderData }: Route.ComponentProps) {
  const store = useMovieListStore({ movieList: loaderData.movieDiary });

  return (
    <>
      <PageMetadata />
      <MoviesLayout store={store} type="Diary" />
    </>
  );
}
