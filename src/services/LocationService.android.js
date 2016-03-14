import {
  DeviceEventEmitter,
  NativeModules
} from 'react-native';

const LocationProvider = NativeModules.LOSTLocationProvider;
export const FREQUENCY = 500;
export const DISTANCE = 1;
export const ACCURACY = LocationProvider.HIGH_ACCURACY;

<<<<<<< HEAD
export const startLocationPolling = () =>
  LocationProvider.startLocationPolling(FREQUENCY, DISTANCE, ACCURACY);
=======
const startLocationPolling = (time, distance, callback) => {
  LOSTLocationProvider.startLocationPolling(time, distance, LOSTLocationProvider.HIGH_ACCURACY);
  DeviceEventEmitter.addListener(
    'location_changed',
    (location) => {
      callback({
        ...location
      });
    }
  );  
}
>>>>>>> [#M167] - BM/AD - Remove lastUpdatedTime from app state. Refactor MapView logic into MapViewAdapter. Add tests

export const onLocationChanged = callback =>
  DeviceEventEmitter.addListener('location_changed', callback);
