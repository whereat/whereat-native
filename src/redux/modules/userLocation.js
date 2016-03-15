// action creators

export const USER_LOCATION_CHANGED = "USER_LOCATION_CHANGED";

export const userLocationChanged = userLocation =>  {
	return {
		type: USER_LOCATION_CHANGED,
		payload: userLocation
	}
};

// reducers

export const initialState = {
	latitude: 40.7092649,
	longitude: -74.0134507
};

export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case USER_LOCATION_CHANGED:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};
