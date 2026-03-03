import { Heading, Rating } from "~/components/library";
import { formatMovieDetails } from "~/utils";

type formatMovieDetailsReturn = ReturnType<typeof formatMovieDetails>;

interface IProps {
  br_title: formatMovieDetailsReturn["br_title"];
  original_title: formatMovieDetailsReturn["original_title"];
  rating: formatMovieDetailsReturn["rating"];
  release_year: formatMovieDetailsReturn["release_year"];
  title: formatMovieDetailsReturn["title"];
  vote_average: formatMovieDetailsReturn["vote_average"];
  vote_count: formatMovieDetailsReturn["vote_count"];
}

function MovieDetailsHeader({
  br_title,
  original_title,
  rating,
  release_year,
  title,
  vote_average,
  vote_count,
}: IProps) {
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
