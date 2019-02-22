import PropTypes from 'prop-types';
import React, { memo } from 'react';

const ProgressBar = memo(function ProgressBar({ width }) {
	return (
		<div className="bg-secondary rounded">
			<div className="bg-danger pb-2 rounded" style={{width: `${width}%`}}></div>
		</div>
	);
});

ProgressBar.propTypes = {
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default ProgressBar;
