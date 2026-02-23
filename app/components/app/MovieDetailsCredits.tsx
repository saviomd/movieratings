import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

import { Anchor, Image, ScrollableHorizontalList } from "~/components/library";
import { formatMovieDetails } from "~/utils";

interface IProps {
  credits: ReturnType<typeof formatMovieDetails>["credits"];
}

type CreditType = "cast" | "crew";

const creditTypes: CreditType[] = ["cast", "crew"];

function MovieDetailsCredits({ credits }: IProps) {
  return creditTypes.map((item) => (
    <Fragment key={item}>
      <h2 className="h4">
        {`${item[0].toUpperCase()}${item.slice(1)}`}
        <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
      </h2>
      {credits[item].length ? (
        <ScrollableHorizontalList>
          {credits[item].map((person) => (
            <li className="col-5 col-sm-3 col-md-2" key={person.id}>
              <Anchor href={person.tmdbURI}>
                <Image
                  src={person.profile_url}
                  title={person.name}
                  type="profile"
                />
                {person.name}
                <div className="fst-italic small">
                  {person.character ?? person.job.join(" / ")}
                </div>
              </Anchor>
            </li>
          ))}
        </ScrollableHorizontalList>
      ) : (
        <p>No data available</p>
      )}
    </Fragment>
  ));
}

export default MovieDetailsCredits;
