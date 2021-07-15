import React from "react";
import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import MockWrapper from "../MockWrapper";
import ProgressBar from "./ProgressBar";

storiesOf("ProgressBar", module).add("default", () => (
  <MockWrapper>
    <ProgressBar
      width={number("Progress", 50, {
        max: 100,
        min: 0,
        range: true,
        step: 1,
      })}
    />
  </MockWrapper>
));
