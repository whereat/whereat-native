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
