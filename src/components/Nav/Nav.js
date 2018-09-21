import PropTypes from 'prop-types';
import React from 'react';

import NavItem from '../NavItem';

const Nav = ({ navLinks }) => (
	<nav className="btn-group">
		{navLinks.map(link => (
			<NavItem key={link.path} link={link} />
		))}
	</nav>
);

Nav.propTypes = {
	navLinks: PropTypes.array.isRequired
};

export default Nav;
