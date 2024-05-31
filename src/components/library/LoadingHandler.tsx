import { memo, ReactNode } from "react";

import Message from "./Message";
import { DataStatusType, MessageType } from "src/types";

type PropsType = {
  children?: ReactNode;
  dataStatus: DataStatusType;
  hasData?: boolean;
  messageNoData?: MessageType;
};

const dataStatuses = ["", "error", "loading", "loaded"];

const LoadingHandler = memo(
  ({
    children,
    dataStatus = "",
    hasData = true,
    messageNoData = "noData",
  }: PropsType) => (
    <>
      {dataStatus === "loaded" && hasData && children}
      {dataStatus === "loaded" && !hasData && <Message type={messageNoData} />}
      {(dataStatus === "loading" || dataStatus === "error") && (
        <Message type={dataStatus} />
      )}
    </>
  ),
);

export default LoadingHandler;
export { dataStatuses };
