import React from 'react';

const Footer = () => {
	const year = (new Date()).getFullYear();
	return (
		<footer className="border-secondary border-top mb-3 pt-3 small text-center">
			&copy; 2017-{year}
			<a className="ml-1 text-danger" href="http://saviomd.com/" target="_blank" rel="noopener noreferrer">
				<img alt="saviomd.com" className="mr-1" src="https://saviomd.com/img/favicon.png" height="15" width="15" />
				Sávio Mendes
			</a>
		</footer>
	)
}

export default Footer;
