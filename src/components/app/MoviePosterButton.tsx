import { Anchor, Image } from "src/components/library";

interface IProps {
  href: string;
  posterUrl?: string;
  title: string;
}

function MoviePosterButton({ href, posterUrl, title }: IProps) {
  return (
    <Anchor href={href}>
      <Image src={posterUrl} title={title} type="poster" />
      {title}
    </Anchor>
  );
}

export default MoviePosterButton;
