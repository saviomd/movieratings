import { Image, ScrollableHorizontalList } from "~/components/library";
import { formatMovieDetails } from "~/utils";

type formatMovieDetailsReturn = ReturnType<typeof formatMovieDetails>;

interface IProps {
  backdrops: formatMovieDetailsReturn["images"]["backdrops"];
  tagline: formatMovieDetailsReturn["tagline"];
  title: formatMovieDetailsReturn["title"];
}

function MovieDetailsBackdrops({ backdrops, tagline, title }: IProps) {
  return (
    <>
      {tagline && (
        <blockquote className="blockquote px-5 text-center">{`"${tagline}"`}</blockquote>
      )}
      {backdrops.length && (
        <ScrollableHorizontalList>
          {backdrops.map(({ url }) => (
            <li className="col-11" key={url}>
              <Image src={url} title={title} type="backdrop" />
            </li>
          ))}
        </ScrollableHorizontalList>
      )}
    </>
  );
}

export default MovieDetailsBackdrops;
