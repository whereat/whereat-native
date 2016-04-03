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

import React from 'react-native-mock';
import mockery from 'mockery';

require("react-native-mock/mock");

React.NativeModules.LOSTLocationProvider = {
    startLocationPolling: () => {}
};

mockery.enable({
    warnOnUnregistered: false
});

mockery.registerSubstitute('../components/MapView', '../components/MapView.android');
mockery.registerSubstitute('../components/MapViewAdapter', '../components/MapViewAdapter.android');
mockery.registerSubstitute('../../../src/components/MapViewAdapter', '../../../src/components/MapViewAdapter.android');
mockery.registerSubstitute('../services/LocationService', '../services/LocationService.android');
