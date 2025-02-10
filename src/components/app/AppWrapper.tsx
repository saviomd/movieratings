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

type PropsType = {
  children: ReactNode;
};

function AppWrapper({ children }: PropsType) {
  return <div className="bg-dark text-white">{children}</div>;
}

export default AppWrapper;
