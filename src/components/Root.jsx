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
const { LOSTLocationProvider: { startLocationPolling, HIGH_ACCURACY } } = NativeModules;

import MapView from '../components/MapView';
import UserLocationTexBox from '../components/UserLocationTextBox';

export default class Root extends Component {

  static defaultProps = { userLocation: initLoc};

  componentDidMount() {
    startLocationPolling(500, 0.1, HIGH_ACCURACY);
    DeviceEventEmitter.addListener(
      'location_changed',
      userLocation => this.props.userLocationChanged({...userLocation})
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <UserLocationTexBox {...this.props}/>
        <MapView
          style={styles.map}
          zoom={12}
          center={{
            lat: this.props.userLocation.latitude,
            lon: this.props.userLocation.longitude
          }}
        />
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
