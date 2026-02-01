import type { ReactNode } from "react";

import Message from "./Message";
import type { DataStatusType, MessageType } from "~/types";

interface IProps {
  children?: ReactNode;
  dataStatus: DataStatusType;
  hasData?: boolean;
  messageNoData?: MessageType;
}

const LoadingHandler = ({
  children,
  dataStatus,
  hasData = true,
  messageNoData = "noData",
}: IProps) => {
  if (dataStatus === "pending" || dataStatus === "error") {
    return <Message type={dataStatus} />;
  }
  if (!hasData) {
    return <Message type={messageNoData} />;
  }
  return children;
};

export default LoadingHandler;
