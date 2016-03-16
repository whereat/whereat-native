import React, {
  Component,
  MapView
} from 'react-native';


export default class MapViewAdapter extends Component {
  render() {
    return(
      <MapView
        style={styles.map}
        region={{
          latitude: this.props.location.latitude,
          longitude: this.props.location.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        }}
        tileOverlayURLTemplate={"http://b.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png"}
        showUserLocation={true}
      />
    );
  }
}

const styles = {
  map: {
    flex: 1
  }
};
