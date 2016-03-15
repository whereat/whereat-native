import {
  DeviceEventEmitter,
  NativeModules
} from 'react-native';

const startLocationPolling = (time, distance, callback) => {
  // LOSTLocationProvider.startLocationPolling(time, distance, LOSTLocationProvider.HIGH_ACCURACY);

  // DeviceEventEmitter.addListener(
  //   'location_changed',
  //   (location) => {
  //     callback({
  //       ...location
  //     });
  //   }
  // );  
}



export default {
  startLocationPolling
};