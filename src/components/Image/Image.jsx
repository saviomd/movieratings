import PropTypes from "prop-types";
import React from "react";

const Image = ({ src, title, type }) => {
  const types = {
    backdrop: {
      height: 300,
      width: 533,
    },
    poster: {
      height: 450,
      width: 300,
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
        <div className="p-3 text-center">{`No ${type} available for ${title}`}</div>
      )}
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["backdrop", "poster"]).isRequired,
};

Image.defaultProps = {
  src: null,
};

export default Image;
