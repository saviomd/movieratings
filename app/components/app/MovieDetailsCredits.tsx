import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

import {
  Anchor,
  Heading,
  Image,
  ScrollableHorizontalList,
} from "~/components/library";
import type { MovieDetailsFormatted } from "~/types";

type Props = Pick<MovieDetailsFormatted, "credits">;

type CreditType = "cast" | "crew";

const creditTypes: CreditType[] = ["cast", "crew"];

function MovieDetailsCredits({ credits }: Props) {
  return creditTypes.map((item) => (
    <Fragment key={item}>
      <Heading level={2}>
        {`${item[0].toUpperCase()}${item.slice(1)}`}
        <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
      </Heading>
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
