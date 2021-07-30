import PropTypes from "prop-types";
import React, { memo } from "react";

import Message from "../Message";

const dataStatuses = ["", "error", "loading", "loaded"];

const LoadingHandler = memo(
  ({ children, dataStatus, hasData, messageNoData }) => (
    <>
      {dataStatus === "loaded" && hasData && <>{children}</>}
      {dataStatus === "loaded" && !hasData && <Message type={messageNoData} />}
      {(dataStatus === "loading" || dataStatus === "error") && (
        <Message type={dataStatus} />
      )}
    </>
  )
);

LoadingHandler.propTypes = {
  children: PropTypes.node.isRequired,
  dataStatus: PropTypes.oneOf(dataStatuses),
  hasData: PropTypes.bool,
  messageNoData: PropTypes.string,
};

LoadingHandler.defaultProps = {
  dataStatus: dataStatuses[0],
  hasData: true,
  messageNoData: "noData",
};

export default LoadingHandler;
export { dataStatuses };
