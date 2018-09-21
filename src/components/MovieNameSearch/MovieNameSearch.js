import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

const MovieNameSearch = ({ handleOnChangeMovieNameSearch, movieCount, movieSearchString }) => (
	<div className="mb-3">
		<div className="input-group input-group-sm mb-1">
			<input id="search-movie" className="form-control" placeholder="Search..." type="text" value={movieSearchString} onChange={(event) => handleOnChangeMovieNameSearch(event.target.value)} />
			<span className="input-group-append">
				<button className="btn btn-secondary" type="button" onClick={() => handleOnChangeMovieNameSearch('')}>
					<FontAwesomeIcon icon="times" />
				</button>
			</span>
		</div>
		<p className="small text-right">{movieCount} movies</p>
	</div>
)

MovieNameSearch.propTypes = {
	handleOnChangeMovieNameSearch: PropTypes.func.isRequired,
	movieCount: PropTypes.number.isRequired,
	movieSearchString: PropTypes.string.isRequired,
};

export default MovieNameSearch;
