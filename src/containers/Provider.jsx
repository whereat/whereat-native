import React, {Component} from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../redux/modules/reducer';

import WhereatApp from './WhereatApp';

const store = createStore(reducer, {location:{currentLocation:{latitude:3,longitude:2,lastUpdatedTime:2}}});

export default class ReduxProvider extends Component {
	render() {
		return (
			<Provider store = {store}>
				{this.props.children}
			</Provider>
		);
	}
}