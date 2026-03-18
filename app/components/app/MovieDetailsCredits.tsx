import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

import { Anchor, Carousel, Grid, Heading, Image } from "~/components/library";
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
        <Carousel>
          {credits[item].map((person) => (
            <Grid.Col as="li" key={person.id} width={5} widthSm={3} widthMd={2}>
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
            </Grid.Col>
          ))}
        </Carousel>
      ) : (
        <p>No data available</p>
      )}
    </Fragment>
  ));
}

export default MovieDetailsCredits;
