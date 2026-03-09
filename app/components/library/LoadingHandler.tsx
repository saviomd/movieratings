import type { ReactNode } from "react";

import Message from "./Message";
import type { DataStatus, MessageType } from "~/types";

interface Props {
  children?: ReactNode;
  dataStatus: DataStatus;
  hasData?: boolean;
  messageNoData?: MessageType;
}

const LoadingHandler = ({
  children,
  dataStatus,
  hasData = true,
  messageNoData = "noData",
}: Props) => {
  if (dataStatus === "pending" || dataStatus === "error") {
    return <Message type={dataStatus} />;
  }
  if (!hasData) {
    return <Message type={messageNoData} />;
  }
  return children;
};

export default LoadingHandler;
