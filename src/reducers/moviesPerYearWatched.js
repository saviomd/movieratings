const initState = {
	groups: {},
	max: 0
};

export const MOVIES_PER_YEAR_WATCHED_UPDATE = 'MOVIES_PER_YEAR_WATCHED_UPDATE';

export const loadMoviesPerYearWatched = (movieList) => {
	return (dispatch, getState) => {
		const groups = movieList.reduce((acc, curr) => {
			const year = curr.WatchedDate.split('-')[0];
			acc[year] ? acc[year]++ : acc[year] = 1;
			return acc;
		}, {});
		let max = 0;
		for (const year in groups) {
			max = (groups[year] > max ? groups[year] : max);
		}
		dispatch(updateMoviesPerYearWatched({groups, max}));
	};
};
const updateMoviesPerYearWatched = (value) => ({type: MOVIES_PER_YEAR_WATCHED_UPDATE, payload: value});

export default (state = initState, action) => {
	switch (action.type) {
		case MOVIES_PER_YEAR_WATCHED_UPDATE:
			const { groups, max } = action.payload;
			return {...state, groups, max};
		default:
			return state;
	}
};
