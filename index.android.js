'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

import App from './src/containers/App';

class whereatClient extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('whereatClient', () => whereatClient);
