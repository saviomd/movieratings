import { MovieList, MovieNameSearch } from "src/components/app";
import type { MoviesRouteType } from "src/types";

type PropsType = {
  type: MoviesRouteType;
};

function MoviesRoute({ type }: PropsType) {
  return (
    <>
      <h1 className="h4">{type}</h1>
      <div className="row">
        <div className="col-12 col-sm-4 col-lg-6">
          <MovieNameSearch type={type} />
        </div>
        <div className="col-12 col-sm-8 col-lg-6">
          <MovieList type={type} />
        </div>
      </div>
    </>
  );
}

export default MoviesRoute;
