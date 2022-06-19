import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { memo } from "react";

const Message = memo(({ type }) => {
  const messages = {
    error: {
      icon: "sad-tear",
      text: "An error has ocurred",
    },
    loading: {
      icon: "hourglass-half",
      text: "Loading...",
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
  };
  const animation = `animate__${
    type === "loading" ? "heartBeat" : "headShake"
  }`;
  return (
    <div className="lead p-3 text-center">
      <div className={`animate__animated ${animation} h3 mb-3`}>
        <span className="bg-secondary p-2 rounded">
          <FontAwesomeIcon icon={messages[type].icon} />
        </span>
      </div>
      {messages[type].text}
    </div>
  );
});

Message.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Message;
