import { Anchor, Image } from "src/components/library";

type PropsType = {
  href: string;
  posterUrl?: string;
  title: string;
};

function MoviePosterButton({ href, posterUrl, title }: PropsType) {
  return (
    <Anchor href={href}>
      <Image src={posterUrl} title={title} type="poster" />
      {title}
    </Anchor>
  );
}

export default MoviePosterButton;
