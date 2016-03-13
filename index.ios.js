'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/redux/modules/reducer';

import App from './src/containers/App';

export const initialState = {
	location: {
			latitude: 40.645650,
			longitude: -75.754199,
			lastUpdatedTime: 1455227589
	}
};

const store = createStore(reducer, initialState);

class whereatClient extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('whereatClient', () => whereatClient);