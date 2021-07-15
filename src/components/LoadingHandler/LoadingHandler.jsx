import PropTypes from 'prop-types';
import React, { memo } from 'react';

import Message from '../Message';

const LoadingHandler = memo(function LoadingHandler({
	children,
	dataStatus,
	hasData,
	messageNoData,
}) {
	return (
		<>
			{(dataStatus === 'loaded' && hasData) && (
				<>{children}</>
			)}
			{(dataStatus === 'loaded' && !hasData) && (
				<Message type={messageNoData} />
			)}
			{(dataStatus === 'loading' || dataStatus === 'error') && (
				<Message type={dataStatus} />
			)}
		</>
	);
});

LoadingHandler.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	dataStatus: PropTypes.string,
	hasData: PropTypes.bool,
	messageNoData: PropTypes.string,
};

LoadingHandler.defaultProps = {
	dataStatus: '',
	hasData: true,
	messageNoData: 'noData',
};

export default LoadingHandler;
