import { Anchor, Image, Rating } from "~/components/library";

interface Props {
  href: string;
  posterUrl?: string;
  rating?: number;
  title: string;
  year: number;
}

function MoviePosterButton({ href, posterUrl, rating, title, year }: Props) {
  const titleFormatted = `${title} (${year.toString()})`;
  return (
    <Anchor href={href} title={titleFormatted}>
      <Image src={posterUrl} title={titleFormatted} type="poster" />
      {!!rating && (
        <div className="small">
          <Rating count={rating} />
        </div>
      )}
    </Anchor>
  );
}

export default MoviePosterButton;
