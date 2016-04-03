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
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  PropTypes,
  NativeModules
} from 'react-native';

import { initialState as initLoc } from '../reducers/userLocation';
import { startLocationPolling, onLocationChanged } from '../services/LocationService';

import MapViewAdapter from '../components/MapViewAdapter';
import UserLocationTexBox from '../components/UserLocationTextBox';
import HmacTextBox from '../components/HmacTextBox';
import EncryptionTextBox from '../components/EncryptionTextBox';

export default class Root extends Component {

  static defaultProps = { userLocation: initLoc};

  componentDidMount() {
    startLocationPolling();
    onLocationChanged(this.props.userLocationChanged);
  }

  render() {
    return (
      <View style={styles.container}>
        <UserLocationTexBox {...this.props}/>
        <EncryptionTextBox/>
        <MapViewAdapter location={this.props.userLocation} />
        <HmacTextBox {...this.props}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
});
