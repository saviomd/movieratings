import { Carousel, Grid, Image } from "~/components/library";
import type { MovieDetailsFormatted } from "~/types";

type Props = Pick<MovieDetailsFormatted, "tagline" | "title"> & {
  backdrops: MovieDetailsFormatted["images"]["backdrops"];
};

function MovieDetailsBackdrops({ backdrops, tagline, title }: Props) {
  return (
    <>
      {tagline && (
        <blockquote className="blockquote px-5 text-center">{`"${tagline}"`}</blockquote>
      )}
      {backdrops.length && (
        <Carousel>
          {backdrops.map(({ url }) => (
            <Grid.Col as="li" key={url} width={11}>
              <Image src={url} title={title} type="backdrop" />
            </Grid.Col>
          ))}
        </Carousel>
      )}
    </>
  );
}

export default MovieDetailsBackdrops;
