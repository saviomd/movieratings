import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			links: [
				{
					icon: 'star',
					name: 'Ratings',
					path: '/'
				},
				{
					icon: 'calendar-alt',
					name: 'Diary',
					path: '/diary'
				},
				{
					icon: 'chart-bar',
					name: 'Stats',
					path: '/stats'
				}
			]
		}
	}
	render () {
		const htmlLinks = this.state.links.map((link, index) => {
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
}

export default Nav;
