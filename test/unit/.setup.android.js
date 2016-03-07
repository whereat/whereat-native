import React from 'react-native-mock';
import mockery from 'mockery';

require("react-native-mock/mock");

React.NativeModules.LOSTLocationProvider = {
    startLocationPolling: () => {},
    latitude: () => {}
};

mockery.enable({
    warnOnUnregistered: false
});

mockery.registerSubstitute('../components/MapView', '../components/MapView.android');