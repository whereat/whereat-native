import React, {
  Component,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  NativeModules
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Root from '../components/Root';
import { locationChanged } from '../redux/modules/location';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  locationChanged: bindActionCreators(locationChanged, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);