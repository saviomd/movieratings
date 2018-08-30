import PropTypes from 'prop-types';
import React from 'react';

const ProgressBar = ({ width }) => (
	<div className="bg-secondary rounded">
		<div className="bg-danger pb-2 rounded" style={{width: `${width}%`}}></div>
	</div>
)

ProgressBar.propTypes = {
	width: PropTypes.number.isRequired
};

export default ProgressBar;
