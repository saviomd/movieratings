import { Carousel, Grid, Heading, Image, Rating } from "~/components/library";
import type { MovieDetailsFormatted } from "~/types";

type Props = Pick<
  MovieDetailsFormatted,
  | "br_title"
  | "original_title"
  | "overview"
  | "rating"
  | "release_year"
  | "title"
  | "vote_average"
  | "vote_count"
> & {
  posters: MovieDetailsFormatted["images"]["posters"];
};

function MovieDetailsHeader({
  br_title,
  original_title,
  overview,
  posters,
  rating,
  release_year,
  title,
  vote_average,
  vote_count,
}: Props) {
  return (
    <div className="animate__animated animate__fadeInUp">
      <Grid>
        <Grid.Col width={12} widthMd={6} widthLg={7}>
          <div className="bg-secondary border border-secondary mb-3 p-3 rounded">
            <Heading level={1}>
              {title}
              <span className="fst-italic ms-2 small">({release_year})</span>
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
            <div className="mb-3 small">
              {vote_average} of 10 <Rating count={1} />
              <span className="small">{`by ${String(vote_count)} TMDb users`}</span>
            </div>
            <div className="lead">{overview}</div>
          </div>
        </Grid.Col>
        {!!posters.length && (
          <Grid.Col width={12} widthMd={6} widthLg={5}>
            <Carousel>
              {posters.map(({ url }) => (
                <Grid.Col as="li" key={url} width={11}>
                  <Image src={url} title={title} type="poster" />
                </Grid.Col>
              ))}
            </Carousel>
          </Grid.Col>
        )}
      </Grid>
    </div>
  );
}

export default MovieDetailsHeader;
