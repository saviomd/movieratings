import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

import type { StatusMessageType } from "~/types";

interface Props {
  type: StatusMessageType;
}

const messages = {
  error: {
    icon: "sad-tear",
    text: "An error has ocurred",
  },
  pageNotFound: {
    icon: "dizzy",
    text: "Page not found",
  },
  pending: {
    icon: "hourglass-half",
    text: "Loading...",
  },
};

const StatusMessage = ({ type }: Props) => {
  const animation = `animate__${
    type === "pending" ? "heartBeat" : "headShake"
  }`;
  return (
    <div className="lead p-3 text-center">
      <div className={`animate__animated ${animation} h3 mb-3`}>
        <span className="bg-secondary p-2 rounded">
          <FontAwesomeIcon
            icon={messages[type].icon as FontAwesomeIconProps["icon"]}
          />
        </span>
      </div>
      {messages[type].text}
    </div>
  );
};

export default StatusMessage;
