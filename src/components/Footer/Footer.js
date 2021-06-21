import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react';

const Footer = memo(function Footer () {
	const year = (new Date()).getFullYear();
	return (
		<footer className="border-secondary border-top mb-3 pt-3 small text-center">
			&copy; 2017-{year}
			<a className="ms-1 text-danger text-decoration-none" href="http://saviomd.com/" target="_blank" rel="noopener noreferrer">
				<img alt="saviomd.com" className="me-1" src="https://saviomd.com/img/favicon.png" height="15" width="15" />
				Sávio Mendes
				<FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
			</a>
		</footer>
	)
});

export default Footer;
