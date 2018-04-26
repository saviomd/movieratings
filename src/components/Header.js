import React from 'react';

import Nav from './Nav';

const Header = () => (
	<header className="border-bottom border-secondary mb-3">
		<div className="align-items-center mt-2 row">
			<h1 className="col-auto h5 mb-2">Movie Ratings</h1>
			<div className="col mb-2 text-right">
				<Nav />
			</div>
		</div>
	</header>
)

export default Header;
