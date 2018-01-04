import React from 'react';

const Footer = () => {
	const year = (new Date()).getFullYear();
	return (
		<footer className="mb-3 small text-center">
			<hr className="border-secondary" />
			&copy; 2017-{year}
			<a className="ml-1 text-danger" href="http://saviomd.com/" target="_blank" rel="noopener noreferrer">
				<img alt="saviomd.com" className="mr-1" src="https://saviomd.com/img/favicon.png" height="15" width="15" />
				Sávio Mendes
			</a>
		</footer>
	)
}

export default Footer;
