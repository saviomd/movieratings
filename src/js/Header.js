import React from 'react';

class Header extends React.Component {
	render () {
		return (
			<nav className="navbar navbar-dark bg-dark border border-secondary my-3 rounded">
				<span className="navbar-brand">Movie Ratings</span>
			</nav>
		)
	}
}

export default Header
