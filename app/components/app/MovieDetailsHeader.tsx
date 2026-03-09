import { Heading, Rating } from "~/components/library";
import type { MovieDetailsFormatted } from "~/types";

type Props = Pick<
  MovieDetailsFormatted,
  | "br_title"
  | "original_title"
  | "rating"
  | "release_year"
  | "title"
  | "vote_average"
  | "vote_count"
>;

function MovieDetailsHeader({
  br_title,
  original_title,
  rating,
  release_year,
  title,
  vote_average,
  vote_count,
}: Props) {
  return (
    <div className="bg-secondary border border-secondary mb-3 p-3 rounded">
      <Heading level={1}>
        {title}
        <span className="fst-italic ms-2 small">{`(${release_year})`}</span>
        <div className="fst-italic small">
          {br_title}
          {title !== original_title && (
            <div className="fst-italic small">({original_title})</div>
          )}
        </div>
      </Heading>
      <div className="small">
        {rating} of 5 <Rating count={1} />
        <span className="small">by me</span>
      </div>
      <div className="small">
        {vote_average} of 10 <Rating count={1} />
        <span className="small">{`by ${String(vote_count)} TMDb users`}</span>
      </div>
    </div>
  );
}

export default MovieDetailsHeader;
