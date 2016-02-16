import {requireNativeComponent, View} from 'react-native';

const iface = {
  name: "OSMMapView",
  propTypes: {
    ...View.propTypes
  }
}

export default requireNativeComponent('OSMMapView', iface);