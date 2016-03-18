import React, {
  Component,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  PropTypes,
  NativeModules
} from 'react-native';

import { initialState as initLoc } from '../redux/modules/userLocation';
import { startLocationPolling, onLocationChanged } from '../services/LocationService';

import MapViewAdapter from '../components/MapViewAdapter';
import UserLocationTexBox from '../components/UserLocationTextBox';
import HmacTextBox from '../components/HmacTextBox';

export default class Root extends Component {

  static defaultProps = { userLocation: initLoc};

  componentDidMount() {
    startLocationPolling();
    onLocationChanged(this.props.userLocationChanged);
  }

  render() {
    return (
      <View style={styles.container}>
        <UserLocationTexBox {...this.props}/>
        <MapViewAdapter location={this.props.userLocation}/>
        <HmacTextBox {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
});
