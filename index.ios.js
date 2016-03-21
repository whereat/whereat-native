'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/reducers/index';

import App from './src/containers/App';

const store = createStore(reducer);

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