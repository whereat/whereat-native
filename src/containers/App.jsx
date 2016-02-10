import React, {Component, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {locationChanged} from '../redux/modules/location';

export default class App extends Component {
	render() {
		return (
			<Text>{this.props.location.latitude}</Text>
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