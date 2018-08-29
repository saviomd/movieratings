import React from 'react';
import { NavLink } from 'react-router-dom';

import Nav from './Nav';

const Header = () => (
	<header className="border-bottom border-secondary mb-3">
		<div className="align-items-center my-2 row">
			<h1 className="col-auto h5 mb-0">
				<NavLink to="/" exact className="text-white">Movie Ratings</NavLink>
			</h1>
			<div className="col text-right">
				<Nav />
			</div>
		</div>
	</header>
)

export default Header;
