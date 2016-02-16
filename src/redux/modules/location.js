const LOCATION_CHANGED = "LOCATION_CHANGED";

function reducer(state = {}, action) {
	switch(action.type) {
		case LOCATION_CHANGED:
		return {
			...state,
			currentLocation: action.location
		};

		default:
		return state;
	}
}

function locationChanged(location) {
	return {
		type: LOCATION_CHANGED,
		location: location
	}
}

module.exports = {
	LOCATION_CHANGED,
	reducer,
	locationChanged
}
