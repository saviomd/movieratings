import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarAlt,
  faChartBar,
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

import "../../../node_modules/animate.css/animate.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

library.add(
  faCalendarAlt,
  faChartBar,
  faDizzy,
  faExternalLinkAlt,
  faFrown,
  faHourglassHalf,
  faSadTear,
  faStar,
  faTimes
);

const AppWrapper = ({ children }) => (
  <Router>
    <div className="bg-dark text-white">{children}</div>
  </Router>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
