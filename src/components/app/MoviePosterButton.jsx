import PropTypes from "prop-types";
import React from "react";

import { Anchor, Image } from "../library";

const MoviePosterButton = ({ href, posterUrl, title }) => {
  return (
    <Anchor href={href}>
      <Image src={posterUrl} title={title} type="poster" />
      {title}
    </Anchor>
  );
};

MoviePosterButton.propTypes = {
  href: PropTypes.string.isRequired,
  posterUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
};

MoviePosterButton.defaultProps = {
  posterUrl: null,
};

export default MoviePosterButton;
