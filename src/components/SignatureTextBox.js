/**
 *
 * Copyright (c) 2016-present, Total Location Test Paragraph.
 * All rights reserved.
 *
 * This file is part of Where@. Where@ is free software:
 * you can redistribute it and/or modify it under the terms of
 * the GNU General Public License (GPL), either version 3
 * of the License, or (at your option) any later version.
 *
 * Where@ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. For more details,
 * see the full license at <http://www.gnu.org/licenses/gpl-3.0.en.html>
 *
 */

import React, {
  Component,
  Text,
  View,
  PropTypes,
} from 'react-native';

import { sign, getKey } from '../services/CryptoService';

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
        <Text>{JSON.stringify(sign(getKey('me'),this.props.userLocation).sig)}</Text>
      </View>
    );
  }
}

