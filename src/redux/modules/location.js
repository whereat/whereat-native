export const LOCATION_CHANGED = "LOCATION_CHANGED";

export const initialState = {
  location: {
    latitude: 40.7092649,
    longitude: -74.0134507,
    lastUpdatedTime: 1316232000000
  }
};

export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case LOCATION_CHANGED:
			return {
				...state,
				location: action.payload.location
			};
		default:
			return state;
	}
};

export const locationChanged = location =>  {
  //console.log('reducerloc', location);
	return {
		type: LOCATION_CHANGED,
		payload: { location: location }
	}
};