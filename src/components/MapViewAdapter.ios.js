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
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        }}
        tileOverlayURLTemplate={"http://b.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png"}
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
