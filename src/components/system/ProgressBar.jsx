import PropTypes from "prop-types";
import React, { memo } from "react";

const ProgressBar = memo(({ width }) => (
  <div className="bg-secondary overflow-hidden rounded">
    <div
      className="animate__animated animate__slideInLeft bg-danger pb-2 rounded"
      style={{ width: `${width}%` }}
    />
  </div>
));

ProgressBar.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default ProgressBar;
