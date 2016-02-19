import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {locationChanged} from '../redux/modules/location';

import OSMMapView from '../components/OSMMapView';

export default class App extends Component {
  render() {
    return (
      <OSMMapView style={styles.map}/>
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
