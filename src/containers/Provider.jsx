import React, {Component} from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../redux/modules/reducer';

const startingState = {
	location: {
		currentLocation: {
			latitude: 42.645650,
			longitude: -73.754199,
			lastUpdatedTime: 1455227589
		}
	}
};

const store = createStore(reducer, startingState);

export default class ReduxProvider extends Component {
	render() {
		return (
			<Provider store={store}>
				{this.props.children}
			</Provider>
		);
	}
}
