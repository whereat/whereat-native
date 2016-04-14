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
  TextInput,
  Text,
  View,
  Switch,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import { encrypt, decrypt, getKey } from '../services/CryptoService';

export default class EncryptionTextBox extends Component {
  
  constructor() {
    super();
    this.state = {
      text: 'Type your secret message here',
      decryptMode: false,
      key: getKey('me')
    };
  }
  
  render(){
    return(
        <View style={styles.container}>
        <TextInput 
      style={styles.textInput}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
        />
        <View style={styles.actions}>
        <Switch 
      onValueChange={(value) => this.setState({decryptMode: value})} 
      value={this.state.decryptMode} 
        /> 
        <TouchableHighlight onPress={this.cryptoAction.bind(this)}>
        <Text style={styles.submit}>
        { (this.state.decryptMode) ? 'decrypt' : 'encrypt' }
      </Text>
        </TouchableHighlight>
        </View>
        </View>
    );
  }

  cryptoAction(){
    if (this.state.decryptMode) {
      this.setState({text: decrypt(this.state.key, this.state.text)});
      this.setState({decryptMode: false});
    } else {
      this.setState({text: encrypt(this.state.key, this.state.text)});
      this.setState({decryptMode: true});
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  textInput: {
    flex: 1
  },
  actions: {
    flexDirection: 'column',
    paddingRight: 5
  },
  submit: {
    flex: 0.3
  }
});

