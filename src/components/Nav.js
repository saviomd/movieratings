import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ navLinks }) => {
	const htmlLinks = navLinks.map((link, index) => {
		return (
			<NavLink key={link.path} to={link.path} exact activeClassName="active" className="btn btn-danger btn-sm">
				<FontAwesomeIcon icon={link.icon} />
				<span className="d-none d-sm-inline-block ml-1">{link.name}</span>
			</NavLink>
		)
	});
	return (
		<nav className="btn-group">
			{htmlLinks}
		</nav>
	)
}

Nav.propTypes = {
	navLinks: PropTypes.array.isRequired
};

export default Nav;
