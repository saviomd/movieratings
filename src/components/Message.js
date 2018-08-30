import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

const Message = ({ type }) => {
	const messages = {
		error: {
			icon: 'sad-tear',
			text: 'An error has ocurred'
		},
		loading: {
			icon: 'hourglass-half',
			text: 'Loading...'
		},
		noMovies: {
			icon: 'frown',
			text: 'No movies to show'
		},
		noStats: {
			icon: 'frown',
			text: 'No stats to show'
		},
		pageNotFound: {
			icon: 'dizzy',
			text: 'Page not found'
		},
	};
	return (
		<div className="lead p-3 text-center">
			<div className="h3 mb-3">
				<span className="bg-secondary p-2 rounded">
					<FontAwesomeIcon icon={messages[type].icon} />
				</span>
			</div>
			{messages[type].text}
		</div>
	);
};

Message.propTypes = {
	type: PropTypes.string.isRequired
};

export default Message;
