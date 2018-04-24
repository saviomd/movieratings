import PropTypes from 'prop-types';
import React from 'react';

import Info from './Info';
import MovieList from './MovieList';
import MovieNameSearch from './MovieNameSearch';
import Nav from './Nav';

import filterMoviesByName from '../helpers/filterMoviesByName';

const propTypes = {
	movies: PropTypes.shape({
		list: PropTypes.arrayOf(PropTypes.object).isRequired,
		listError: PropTypes.bool.isRequired,
		listLoading: PropTypes.bool.isRequired
	}),
	type: PropTypes.string.isRequired
}

class PageMovies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieSearchString: ''
		}
		this.handleOnChangeMovieNameSearch = this.handleOnChangeMovieNameSearch.bind(this)
	}
	handleOnChangeMovieNameSearch (value) {
		value.trim().toLowerCase();
		this.setState({
			movieSearchString: value
		});
	}
	render () {
		const movieListToRender = filterMoviesByName(this.props.movies.list, this.state.movieSearchString);
		let html = '';
		if (this.props.movies.listLoading) {
			html = <div className="text-center">Loading...</div>;
		} else if (this.props.movies.listError) {
			html = <div className="text-center">Error :(</div>;
		} else if (movieListToRender.length) {
			html = <MovieList movies={movieListToRender} type={this.props.type} />;
		} else {
			html = <div className="text-center">No movies to show</div>;
		}
		return (
			<div>
				<Nav />
				<div className="justify-content-center mb-3 row">
					<div className="col-12 col-sm-4 col-lg-3">
						<Info />
						<MovieNameSearch handleOnChangeMovieNameSearch={this.handleOnChangeMovieNameSearch} movieCount={movieListToRender.length} movieSearchString={this.state.movieSearchString} />
					</div>
					<div className="col-12 col-sm-8 col-lg-6">
						{html}
					</div>
				</div>
			</div>
		)
	}
}

PageMovies.propTypes = propTypes;

export default PageMovies;
