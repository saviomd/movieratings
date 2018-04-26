import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
	handleOnChangeMovieNameSearch: PropTypes.func.isRequired,
	movieCount: PropTypes.number.isRequired,
	movieSearchString: PropTypes.string.isRequired,
}

class MovieNameSearch extends React.Component {
	render () {
		return (
			<div className="mb-3">
				<div className="input-group input-group-sm mb-1">
					<input id="search-movie" className="form-control" placeholder="Search..." type="text" value={this.props.movieSearchString} onChange={(event) => this.props.handleOnChangeMovieNameSearch(event.target.value)} />
					<span className="input-group-append">
						<button className="btn btn-secondary" type="button" onClick={() => this.props.handleOnChangeMovieNameSearch('')}>&times;</button>
					</span>
				</div>
				<p className="small text-right">{this.props.movieCount} movies</p>
			</div>
		)
	}
}

MovieNameSearch.propTypes = propTypes;

export default MovieNameSearch;
