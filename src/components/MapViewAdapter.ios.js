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
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
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