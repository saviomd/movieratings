import PropTypes from 'prop-types'
import React from 'react';
import { connect } from 'react-redux';

import Message from '../components/Message';
import MovieInfo from '../components/MovieInfo';

import { loadMovieInfo } from '../reducers/movieInfo';

const propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			movieId: PropTypes.string.isRequired
		})
	}),
	movieInfo: PropTypes.shape({
		backdrop_url: PropTypes.string.isRequired,
		dataStatus: PropTypes.string.isRequired,
		id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
		LetterboxdURI: PropTypes.string.isRequired,
		overview: PropTypes.string.isRequired,
		poster_url: PropTypes.string.isRequired,
		Rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
		title: PropTypes.string.isRequired,
		vote_average: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
	})
}

class PageMovieInfo extends React.Component {
	componentDidMount() {
		this.props.loadMovieInfo(this.props.match.params.movieId);
	}
	render () {
		const { movieInfo } = this.props;
		let html = '';
		if (movieInfo.dataStatus === 'loading') {
			html = <Message type='loading' />
		} else if (movieInfo.dataStatus === 'error') {
			html = <Message type='error' />
		} else if (movieInfo.id !== '') {
			html = <MovieInfo movieInfo={movieInfo} />
		}
		return (
			<div className="mb-3">
				{html}
			</div>
		)
	}
}

PageMovieInfo.propTypes = propTypes;

export default connect(
	(state) => ({movieInfo: state.movieInfo}),
	{loadMovieInfo}
)(PageMovieInfo);
