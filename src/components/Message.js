import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
				icon: 'sad-tear',
				message: 'An error has ocurred'
			},
			loading: {
				icon: 'hourglass-half',
				message: 'Loading...'
			},
			noMovies: {
				icon: 'frown',
				message: 'No movies to show'
			},
			noStats: {
				icon: 'frown',
				message: 'No stats to show'
			},
			pageNotFound: {
				icon: 'dizzy',
				message: 'Page not found'
			},
		}
	}
	render () {
		return (
			<div className="lead p-3 text-center">
				<div className="h3 mb-3">
					<span className="bg-secondary p-2 rounded">
						<FontAwesomeIcon icon={this.state[this.props.type].icon} />
					</span>
				</div>
				{this.state[this.props.type].message}
			</div>
		)
	}
}

Message.propTypes = propTypes;

export default Message;
