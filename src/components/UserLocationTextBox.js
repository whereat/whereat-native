import React, {
  Component,
  Text,
  View,
  PropTypes,
} from 'react-native';

export default class UserLocationTextBox extends Component {

  static propTypes = {
    userLocation: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    })
  };

  render(){
    return(
      <View>
        <Text>{`LATITUDE: ${this.props.userLocation.latitude}\n`}</Text>
        <Text>{`LONGITUDE: ${this.props.userLocation.longitude}\n`}</Text>
      </View>
    );
  }
}
