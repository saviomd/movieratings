import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import type { MessageType } from "src/types";

type PropsType = {
  type: MessageType;
};

const Message = ({ type }: PropsType) => {
  const messages = {
    error: {
      icon: "sad-tear",
      text: "An error has ocurred",
    },
    noData: {
      icon: "frown",
      text: "No data to show",
    },
    noMovies: {
      icon: "frown",
      text: "No movies to show",
    },
    noStats: {
      icon: "frown",
      text: "No stats to show",
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

export default Message;
