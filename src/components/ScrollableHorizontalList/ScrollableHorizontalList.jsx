import PropTypes from "prop-types";
import React from "react";

const ScrollableHorizontalList = ({ children }) => {
  const verticalListStyle = {
    overflowX: "scroll",
    WebkitOverflowScrolling: "touch",
  };
  return (
    <ul
      className="flex-nowrap g-3 list-unstyled mb-0 pb-3 row"
      style={verticalListStyle}
    >
      {children}
    </ul>
  );
};

ScrollableHorizontalList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollableHorizontalList;
