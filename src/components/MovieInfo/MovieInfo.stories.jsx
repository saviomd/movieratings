import React from "react";
import { storiesOf } from "@storybook/react";

import MockWrapper from "../MockWrapper";
import MovieInfo from "./MovieInfo";
import MovieInfoContext from "../../contexts/movieInfoContext";
import movieInfoMock from "../../../__mocks__/movieInfoMock";

storiesOf("MovieInfo", module).add("default", () => (
  <MovieInfoContext.Provider
    value={{
      movieInfo: movieInfoMock.movieInfo,
      movieInfoStatus: movieInfoMock.movieInfoStatus,
    }}
  >
    <MockWrapper>
      <MovieInfo />
    </MockWrapper>
  </MovieInfoContext.Provider>
));
