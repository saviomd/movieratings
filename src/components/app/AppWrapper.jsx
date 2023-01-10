import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarAlt,
  faChartSimple,
  faDizzy,
  faExternalLinkAlt,
  faFrown,
  faHourglassHalf,
  faSadTear,
  faStar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import React from "react";
import { HashRouter as Router } from "react-router-dom";

import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

library.add(
  faCalendarAlt,
  faChartSimple,
  faDizzy,
  faExternalLinkAlt,
  faFrown,
  faHourglassHalf,
  faSadTear,
  faStar,
  faTimes
);

function AppWrapper({ children }) {
  return (
    <Router>
      <div className="bg-dark text-white">{children}</div>
    </Router>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
