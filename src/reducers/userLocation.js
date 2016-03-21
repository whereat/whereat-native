import { handleActions } from 'redux-actions';

export const initialState = {
  latitude: 40.7092649,
  longitude: -74.0134507
};

export default userLocation = handleActions({
  USER_LOCATION_CHANGED: (state, action) => ({ ...state, ...action.payload })
}, initialState);
