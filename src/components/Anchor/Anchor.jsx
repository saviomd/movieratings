import PropTypes from "prop-types";
import React from "react";

const Anchor = ({ children, href, margin, target }) => {
  const marginClasses = {
    both: "m-1",
    left: "ms-1",
    none: "",
    right: "me-1",
  };
  const marginClass = marginClasses[margin];
  return (
    <a
      className={`${marginClass} text-danger text-decoration-none`}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : null}
    >
      {children}
    </a>
  );
};

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  margin: PropTypes.oneOf(["both", "left", "none", "right"]),
  target: PropTypes.oneOf(["_blank", "_parent", "_self", "_top"]),
};

Anchor.defaultProps = {
  margin: null,
  target: null,
};

export default Anchor;
