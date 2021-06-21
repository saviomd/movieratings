import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react';

import tmdbApi from '../../helpers/tmdbApi';

const SiteInfo = memo(function SiteInfo() {
	return (
		<div className="border-secondary border-top pt-3 small text-center">
			<div className="mb-3">
				<img alt="Letterboxd" src="https://a.ltrbxd.com/logos/letterboxd-logo-v-neg-rgb-1000px.png" height="48" />
				<br />
				My Ratings and Diary data are exported from Letterboxd from time to time.<br />
				My
				<a className="mx-1 text-danger text-decoration-none" href="https://letterboxd.com/saviomd" target="_blank" rel="noopener noreferrer">
					profile
					<FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
				</a>
				will have more up to date information.
			</div>
			<div className="mb-3">
				<img alt="TMDb" src={tmdbApi.img.attributionUrl} height="48" />
				<br />
				This product uses the TMDb API but is not endorsed or certified by TMDb.
			</div>
		</div>
	);
});

export default SiteInfo;
