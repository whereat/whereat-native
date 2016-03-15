import { createAction, handleActions } from 'redux-actions';

export const initialState = {
  latitude: 40.7092649,
  longitude: -74.0134507
};

// action creators
export const userLocationChanged = createAction('USER_LOCATION_CHANGED');

// reducers
export const reducer = handleActions({
  USER_LOCATION_CHANGED: (state, action) => ({ ...state, ...action.payload })
}, initialState);
