const combineReducers = require('redux').combineReducers;
const location = require("./location").reducer;

export default combineReducers({
	location
});
