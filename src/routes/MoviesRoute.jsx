import PropTypes from "prop-types";
import React from "react";

import { MovieList, MovieNameSearch } from "src/components/app";

function PageMovies({ type }) {
  return (
    <>
      <h1 className="h4">{type}</h1>
      <div className="row">
        <div className="col-12 col-sm-4 col-lg-6">
          <MovieNameSearch type={type} />
        </div>
        <div className="col-12 col-sm-8 col-lg-6">
          <MovieList type={type} />
        </div>
      </div>
    </>
  );
}

PageMovies.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PageMovies;
