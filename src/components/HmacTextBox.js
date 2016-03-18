import React, {
  Component,
  Text,
  View,
  PropTypes,
} from 'react-native';

import { hmacLoc } from '../services/CryptoService';

export default class HmacTextBox extends Component {

  static propTypes = {
    userLocation: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    })
  };

  render(){
    return(
      <View>
        <Text>{hmacLoc(this.props.userLocation)}</Text>
      </View>
    );
  }
}

