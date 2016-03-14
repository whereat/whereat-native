import React, {
  Component,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  PropTypes,
  NativeModules
} from 'react-native';

import { initialState as initLoc } from '../redux/modules/location';
const LOSTLocationProvider = NativeModules.LOSTLocationProvider;

import MapView from '../components/MapView';
import LocationTexBox from '../components/LocationTextBox';

export default class Root extends Component {

  static defaultProps = { location: initLoc };

  componentDidMount() {
    LOSTLocationProvider.startLocationPolling(500, 0.1, LOSTLocationProvider.HIGH_ACCURACY);
    this.locationChangedListener = DeviceEventEmitter.addListener(
      'location_changed',
      (location) => {
        this.props.locationChanged({
          ...location,
        })
      }
    );
  }

  render() {
    return (
      <View style={styles.container} {...this.props}>
        <LocationTexBox {...this.props}/>
        <MapView
          style={styles.map}
          zoom={12}
          center={{
            lat: this.props.location.latitude,
            lon: this.props.location.longitude
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
