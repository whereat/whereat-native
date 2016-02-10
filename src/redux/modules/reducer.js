const combineReducers = require('redux').combineReducers;

const {reducer as location} = require("./location");

module.exports = combineReducers({
	location
});