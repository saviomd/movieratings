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
				}
			]
		}
	}
	render () {
		const htmlLinks = this.state.links.map((link, index) => {
			return (
				<NavLink key={link.id} to={link.id} exact activeClassName="active" className="btn btn-danger btn-sm">
					{link.name}
				</NavLink>
			)
		});
		return (
			<div className="text-center">
				<div className="btn-group mb-3">
					{htmlLinks}
				</div>
			</div>
		)
	}
}

export default Nav
