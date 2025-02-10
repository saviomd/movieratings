import type { ReactNode } from "react";

import Message from "./Message";
import type { DataStatusType, MessageType } from "src/types";

type PropsType = {
  children?: ReactNode;
  dataStatus: DataStatusType;
  hasData?: boolean;
  messageNoData?: MessageType;
};

const LoadingHandler = ({
  children,
  dataStatus = "success",
  hasData = true,
  messageNoData = "noData",
}: PropsType) => {
  if (dataStatus === "pending" || dataStatus === "error") {
    return <Message type={dataStatus} />;
  }
  if (dataStatus === "success" && !hasData) {
    return <Message type={messageNoData} />;
  }
  return children;
};

export default LoadingHandler;
