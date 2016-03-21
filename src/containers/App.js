import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { mapValues } from 'lodash';

import actions from '../actions/index';
import Root from '../components/Root';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch =>
  mapValues(actions, action => bindActionCreators(action, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Root);
