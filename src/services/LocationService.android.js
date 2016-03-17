import {
  DeviceEventEmitter,
  NativeModules
} from 'react-native';

const LocationProvider = NativeModules.LOSTLocationProvider;
export const FREQUENCY = 500;
export const DISTANCE = 1;
export const ACCURACY = LocationProvider.HIGH_ACCURACY;

export const startLocationPolling = () =>
  LocationProvider.startLocationPolling(FREQUENCY, DISTANCE, ACCURACY);

export const onLocationChanged = callback =>
  DeviceEventEmitter.addListener('location_changed', callback);
