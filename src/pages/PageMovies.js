import PropTypes from 'prop-types';
import React from 'react';

import MovieList from '../components/MovieList';
import MovieNameSearch from '../components/MovieNameSearch';

const PageMovies = ({ type }) => (
	<>
		<h1 className="h4">{type}</h1>
		<div className="row">
			<div className="col-12 col-sm-4">
				<MovieNameSearch type={type} />
			</div>
			<div className="col-12 col-sm-8">
				<MovieList type={type} />
			</div>
		</div>
	</>
);

PageMovies.propTypes = {
	type: PropTypes.string.isRequired
};

export default PageMovies;
