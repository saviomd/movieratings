import React, { memo } from 'react';

import tmdbApi from '../../helpers/tmdbApi';

const SiteInfo = memo(function SiteInfo() {
	return (
		<div className="border-secondary border-top pt-3 small text-center">
			<div className="mb-3">
				My Ratings and Diary data are exported from Letterboxd from time to time.<br />
				So my <a className="text-danger" href="https://letterboxd.com/saviomd" target="_blank" rel="noopener noreferrer">profile</a> will have more up to date information.
			</div>
			<div className="mb-3">
				<img alt="Powered by TMDB" src={tmdbApi.img.attributionUrl} height="38" />
				<br />
				This product uses the TMDb API but is not endorsed or certified by TMDb.
			</div>
		</div>
	);
});

export default SiteInfo;
