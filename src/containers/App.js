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
import { userLocationChanged } from '../redux/modules/userLocation';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  userLocationChanged: bindActionCreators(userLocationChanged, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
