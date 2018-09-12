const initState = {
	groups: {},
	max: 0
};

export const MOVIES_PER_DECADE_RELEASED_UPDATE = 'MOVIES_PER_DECADE_RELEASED_UPDATE';

export const loadMoviesPerDecadeReleased = (movieList) => {
	return (dispatch, getState) => {
		const groups = movieList.reduce((acc, curr) => {
			const decade = `${curr.Year.toString().substr(0, 3)}0`;
			acc[decade] ? acc[decade]++ : acc[decade] = 1;
			return acc;
		}, {});
		let max = 0;
		for (const decade in groups) {
			max = (groups[decade] > max ? groups[decade] : max);
		}
		dispatch(updateMoviesPerDecadeReleased({groups, max}));
	};
};
const updateMoviesPerDecadeReleased = (value) => ({type: MOVIES_PER_DECADE_RELEASED_UPDATE, payload: value});

export default (state = initState, action) => {
	switch (action.type) {
		case MOVIES_PER_DECADE_RELEASED_UPDATE:
			const { groups, max } = action.payload;
			return {...state, groups, max};
		default:
			return state;
	}
};
