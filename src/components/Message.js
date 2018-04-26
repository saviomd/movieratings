import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
	type: PropTypes.string.isRequired
}

class Message extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: {
				icon: '😢',
				message: 'An error has ocurred'
			},
			loading: {
				icon: '⏳',
				message: 'Loading...'
			},
			noMovies: {
				icon: '💔',
				message: 'No movies to show'
			},
			noStats: {
				icon: '💔',
				message: 'No stats to show'
			},
			pageNotFound: {
				icon: '😵',
				message: 'Page not found'
			},
		}
	}
	render () {
		return (
			<div className="lead p-3 text-center">
				<div className="h3 mb-3">
					<span className="bg-secondary p-2 rounded-circle">{this.state[this.props.type].icon}</span>
				</div>
				{this.state[this.props.type].message}
			</div>
		)
	}
}

Message.propTypes = propTypes;

export default Message;
