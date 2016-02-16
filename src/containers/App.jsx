import React, {Component, Text, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {locationChanged} from '../redux/modules/location';

import OSMMapView from '../components/OSMMapView';

export default class App extends Component {
	render() {
		return (
			<OSMMapView style={{height: 200, width: 200}}/>
		);
	}
}

function mapStateToProps(state) {
	return {
		location: state.location.currentLocation
	};
}

function mapDispatchToProps(dispatch) {
	return {
		locationChanged: bindActionCreators({locationChanged}, dispatch)
	};
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
