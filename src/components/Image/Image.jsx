import PropTypes from "prop-types";
import React from "react";

function Image({ src, title, type }) {
  const types = {
    backdrop: {
      height: 300,
      width: 533,
    },
    poster: {
      height: 450,
      width: 300,
    },
    profile: {
      height: 278,
      width: 185,
    },
  };
  const dimensions = types[type];
  const style = {
    paddingTop: `${(dimensions.height / dimensions.width) * 100}%`,
  };
  return (
    <div className="bg-secondary ratio text-white" style={style}>
      {src ? (
        <img alt={`${type} for ${title}`} loading="lazy" src={src} />
      ) : (
        <div className="p-3 small text-center">{`No ${type} image available for ${title}`}</div>
      )}
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["backdrop", "poster", "profile"]).isRequired,
};

Image.defaultProps = {
  src: null,
};

export default Image;
