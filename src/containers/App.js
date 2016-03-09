import React, {
  Component,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  NativeModules
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {locationChanged} from '../redux/modules/location';
const LOSTLocationProvider = NativeModules.LOSTLocationProvider;

import MapView from '../components/MapView';

  /**
   * todo:
   * - change shape of location reducer state tree to eliminate nesting
   * - use redux-action to reduce boilerploate
   * - separate location actions and reducers into separate files (decouple actions from reducers: more composable)
   * - extract all view logic to Root component, leave state logic in App
   * - extract location update text box to LocationTextBox component
   * - move MapView props to default state for a `map` reducer and prop object
   */


export class App extends Component {
  componentDidMount() {
    LOSTLocationProvider.startLocationPolling(500, 0.1, LOSTLocationProvider.HIGH_ACCURACY);
    this.locationChangedListener = DeviceEventEmitter.addListener(
      'location_changed',
      (location) => {
        this.props.locationChanged({
          ...location,
          lastUpdatedTime: new Date().getTime()
        })
      }
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{`LATITUDE: ${this.props.location.latitude}\n`}</Text>
          <Text>{`LONGITUDE: ${this.props.location.longitude}\n`}</Text>
          <Text>{`LAST UPDATED TIME: ${this.props.location.lastUpdatedTime}`}</Text>
        </View>
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

App.defaultProps = { location: {latitude: 0, longitude: 0, lastUpdatedTime: 0}};

const mapStateToProps = state => ({
  location: state.location.location
});

const mapDispatchToProps = dispatch => ({
  locationChanged: bindActionCreators(locationChanged, dispatch)
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);