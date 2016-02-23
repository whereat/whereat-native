import {requireNativeComponent, View} from 'react-native';

const iface = {
  name: "OsmDroidMapView",
  propTypes: {
    ...View.propTypes
  }
};

export default requireNativeComponent('OsmDroidMapView', iface);
