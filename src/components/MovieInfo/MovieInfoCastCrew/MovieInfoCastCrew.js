import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';

import movieCreditsContext from '../../../contexts/movieCreditsContext';
import LoadingHandler from '../../LoadingHandler';

const MovieInfoCastCrew = () => {
	const { movieCredits, movieCreditsStatus } = useContext(movieCreditsContext);
	const verticalListStyle = {
		overflowX: 'scroll',
		WebkitOverflowScrolling: 'touch',
	};
	return (
		<LoadingHandler dataStatus={movieCreditsStatus} hasData={!!movieCredits.id}>
			<h2 className="h4">
				Cast
				<FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
			</h2>
			{!!movieCredits.cast.length ? (
				<ul className="flex-nowrap g-3 list-unstyled mb-0 row" style={verticalListStyle}>
					{movieCredits.cast.map(person => (
						<li className="col-auto mb-3" key={person.credit_id}>
							<a className="btn btn-secondary btn-sm" href={person.tmdbURI} rel="noopener noreferrer" target="_blank">
								{person.name}
								<div className="small">{person.character}</div>
							</a>
						</li>
					))}
				</ul>
			) : (
				<p>No data available</p>
			)}
			<h2 className="h4">
				Crew
				<FontAwesomeIcon className="ms-1 small" icon="external-link-alt" />
			</h2>
			{!!movieCredits.crew.length ? (
				<ul className="flex-nowrap g-3 list-unstyled mb-0 row" style={verticalListStyle}>
					{movieCredits.crew.map(person => (
						<li className="col-auto mb-3" key={person.credit_id}>
							<a className="btn btn-secondary btn-sm" href={person.tmdbURI} rel="noopener noreferrer" target="_blank">
								{person.name}
								<div className="small">{person.job}</div>
							</a>
						</li>
					))}
				</ul>
			) : (
				<p>No data available</p>
			)}
		</LoadingHandler>
	);
};

export default MovieInfoCastCrew;
