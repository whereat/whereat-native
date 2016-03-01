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

export class App extends Component {
  componentWillMount() {
    LOSTLocationProvider.startLocationPolling(500, 0.1, LOSTLocationProvider.HIGH_ACCURACY);

    this.locationChangedListener = DeviceEventEmitter.addListener(
      'location_changed',
      (location) => this.props.locationChanged({
        ...location,
        lastUpdatedTime: new Date().getTime()
      })
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
          zoom={10}
          center={{
            lat: 41.8369,
            lon: -87.6847
          }}
        />
      </View>
    );
  }
}

App.defaultProps = { location: {latitude: 0, longitude: 0, lastUpdatedTime: 0}};

function mapStateToProps(state) {
  return {
    location: state.location.currentLocation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationChanged: bindActionCreators(locationChanged, dispatch)
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);