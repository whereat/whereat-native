import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {locationChanged} from '../redux/modules/location';

import MapView from '../components/MapView';

export default class App extends Component {
  render() {
    return (
      <MapView
        style={styles.map}
        zoom={10}
        center={{
          lat: 41.8369,
          lon: -87.6847
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location.currentLocation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    locationChanged: bindActionCreators({locationChanged}, dispatch)
  };
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
