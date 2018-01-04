import PropTypes from 'prop-types';
import React from 'react';

import Info from './Info';
import MovieList from './MovieList';
import MovieNameSearch from './MovieNameSearch';

import filterMoviesByName from '../helpers/filterMoviesByName';

const propTypes = {
	movieDiary: PropTypes.arrayOf(PropTypes.object).isRequired
}

class Diary extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movieDiarySearchString: ''
		}
		this.handleOnChangeMovieNameSearch = this.handleOnChangeMovieNameSearch.bind(this)
	}
	handleOnChangeMovieNameSearch (value) {
		value.trim().toLowerCase();
		this.setState({
			movieDiarySearchString: value
		});
	}
	render () {
		const movieDiaryToRender = filterMoviesByName(this.props.movieDiary, this.state.movieDiarySearchString);
		return (
			<div>
				<div className="justify-content-center mb-3 row">
					<div className="col-12 col-sm-4 col-lg-3">
						<Info />
						<MovieNameSearch handleOnChangeMovieNameSearch={this.handleOnChangeMovieNameSearch} movieCount={movieDiaryToRender.length} movieSearchString={this.state.movieDiarySearchString} />
					</div>
					<div className="col-12 col-sm-8 col-lg-6">
						<MovieList movies={movieDiaryToRender} type="diary" />
					</div>
				</div>
			</div>
		)
	}
}

Diary.propTypes = propTypes;

export default Diary;
