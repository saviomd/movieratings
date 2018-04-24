import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
	width: PropTypes.number.isRequired
}

class ProgressBar extends React.Component {
	render () {
		return (
			<div className="bg-secondary rounded">
				<div className="bg-danger pb-2 rounded" style={{width: `${this.props.width}%`}}></div>
			</div>
		)
	}
}

ProgressBar.propTypes = propTypes;

export default ProgressBar;
