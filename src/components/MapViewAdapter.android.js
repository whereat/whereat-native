import React, {
  Component
} from 'react-native';

import MapView from '../components/MapView';

export default class MapViewAdapter extends Component {
  render() {
    return(
      <MapView
        style={styles.map}
        zoom={12}
        center={{
          lat: this.props.location.latitude,
          lon: this.props.location.longitude
        }}
      />
    );
  }
}

const styles = {
  map: {
    flex: 1
  }
};