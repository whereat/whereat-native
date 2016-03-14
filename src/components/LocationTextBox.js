import React, {
  Component,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  PropTypes,
  NativeModules
} from 'react-native';

export default class LocationTextBox extends Component {

  static propTypes = {
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    })
  };

  render(){
    return(
      <View>
        <Text>{`LATITUDE: ${this.props.location.latitude}\n`}</Text>
        <Text>{`LONGITUDE: ${this.props.location.longitude}\n`}</Text>
      </View>
    );
  }
}