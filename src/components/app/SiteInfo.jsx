import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Anchor } from "src/components/library";
import { tmdbApi } from "src/utils";

const SiteInfo = () => (
  <div className="border-secondary border-top pt-3 small text-center">
    <div className="mb-3">
      My Ratings and Diary data are exported from Letterboxd from time to time.
      <br />
      My{" "}
      <Anchor href="https://letterboxd.com/saviomd">
        profile
        <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
      </Anchor>{" "}
      will have more up to date information.
    </div>
    <div className="mb-3">
      <img alt="TMDb" src={tmdbApi.img.attribution()} height="32" />
      <br />
      This product uses the TMDb API but is not endorsed or certified by{" "}
      <Anchor href="https://www.themoviedb.org">
        TMDb
        <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
      </Anchor>
      .
    </div>
    <div className="mb-3">
      Streaming information powered by{" "}
      <Anchor href="https://www.justwatch.com/br">
        JustWatch
        <FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
      </Anchor>
      .
    </div>
  </div>
);

export default SiteInfo;
