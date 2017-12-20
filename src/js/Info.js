import React from 'react';

class Info extends React.Component {
	render () {
		return (
			<div className="mb-3">
				<p>My movie ratings in Letterboxd.</p>
				<p>Data is exported from time to time, so my <a className="text-danger" href="https://letterboxd.com/saviomd" target="_blank" rel="noopener noreferrer">profile</a> will have more up to date information.</p>
			</div>
		)
	}
}

export default Info
