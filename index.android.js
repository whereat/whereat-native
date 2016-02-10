'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

import App from './src/containers/App';
import Provider from './src/containers/Provider';

class whereatClient extends Component {
  render() {
    return (
		<Provider>
			<App />
		</Provider>
    );
  }
}

AppRegistry.registerComponent('whereatClient', () => whereatClient);
