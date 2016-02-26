import {
  requireNativeComponent,
  PropTypes,
  View}
from 'react-native';

const iface = {
  name: "OsmDroidMapView",
  propTypes: {
    ...View.propTypes,
    zoom: PropTypes.number.isRequired,
    center: PropTypes.shape({
      lat: PropTypes.number,
      lon: PropTypes.number
    }).isRequired
  }
};

export default requireNativeComponent('OsmDroidMapView', iface);
