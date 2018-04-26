import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			links: [
				{
					id: '/',
					name: 'Ratings'
				},
				{
					id: '/diary',
					name: 'Diary'
				},
				{
					id: '/stats',
					name: 'Stats'
				}
			]
		}
	}
	render () {
		const htmlLinks = this.state.links.map((link, index) => {
			return (
				<NavLink key={link.id} to={link.id} exact activeClassName="active" className="btn btn-danger">
					{link.name}
				</NavLink>
			)
		});
		return (
			<nav className="btn-group">
				{htmlLinks}
			</nav>
		)
	}
}

export default Nav;
