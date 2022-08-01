import PropTypes from "prop-types";
import React from "react";

function ScrollableHorizontalList({ children }) {
  const verticalListStyle = {
    overflowX: "scroll",
    WebkitOverflowScrolling: "touch",
  };
  return (
    <ul className="flex-nowrap g-3 list-unstyled row" style={verticalListStyle}>
      {children}
    </ul>
  );
}

ScrollableHorizontalList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollableHorizontalList;
