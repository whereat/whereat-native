import React, {Component} from 'react';
import {createStore, bindActionCreators} from 'redux';
import {connect, Provider} from 'react-redux';

import reducer from '~/redux/modules/reducer';

import {locationChanged} from '~/redux/modules/location';

const store = createStore(reducer);

export default class App extends Component {
	render() {
		return (
			<Provider store = {store}>
				<Text>HI</Text>
			</Provider>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)