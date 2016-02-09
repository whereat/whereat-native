export const LOCATION_CHANGED = "LOCATION_CHANGED";

export default function reducer(state = {}, action) {
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

export function locationChanged(location) {
	return {
		type: LOCATION_CHANGED,
		location: location
	}
}