'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  MapView
} from 'react-native';


class whereatClient extends Component {
  render() {
    return (
      <MapView
        style={styles.map}
        tileOverlayURLTemplate={"http://tile.openstreetmap.org/{z}/{x}/{y}.png"}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('whereatClient', () => whereatClient);
