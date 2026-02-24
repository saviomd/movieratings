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
import type { ReactNode } from "react";

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
  faTimes,
);

interface IProps {
  children: ReactNode;
}

function AppWrapper({ children }: IProps) {
  return children;
}

export default AppWrapper;
