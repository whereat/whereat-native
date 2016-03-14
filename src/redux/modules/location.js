// action creators

export const LOCATION_CHANGED = "LOCATION_CHANGED";

export const locationChanged = location =>  {
	return {
		type: LOCATION_CHANGED,
		payload: location
	}
};

// reducers

export const initialState = {
	latitude: 40.7092649,
	longitude: -74.0134507
};

export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case LOCATION_CHANGED:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};