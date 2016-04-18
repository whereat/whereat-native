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

import chai from 'chai';
chai.should();

import React, { View } from "react-native";
import { shallow } from "enzyme";

import EncryptionTextBox from '../../../src/components/EncryptionTextBox';
import { meetMeInTheParkCT } from '../../support/cryptoStrings';

describe('EncryptionTextBox component', () => {
  
  it("Has correct default state & starts in decrypt mode", () => {
    let encryptionTextBox = shallow(<EncryptionTextBox/>);
    encryptionTextBox.find('TextInput').props().value.should.eql('Type your secret message here');
    encryptionTextBox.find('Switch').props().value.should.eql(false);
    encryptionTextBox.find("Text").props().children.should.eql('encrypt');
  });
  
  it("Can toggle between encrypt and decrypt modes", () => {
    let encryptionTextBox = shallow(<EncryptionTextBox/>);
    encryptionTextBox.find('TouchableHighlight').simulate('press');
    encryptionTextBox.find('Switch').props().value.should.eql(true);
    encryptionTextBox.find("Text").props().children.should.eql('decrypt');
  });

  it('Encrypts text', () => {
    let encryptionTextBox = shallow(<EncryptionTextBox/>);
    encryptionTextBox.setState({text: 'Hey!'});
    encryptionTextBox.find('TouchableHighlight').simulate('press');
    let encryptedJSON = JSON.parse(encryptionTextBox.find("TextInput").props().value);
    encryptedJSON.iter.should.eql(1000);
    encryptedJSON.ks.should.eql(128);
    encryptedJSON.ts.should.eql(64);
    encryptedJSON.mode.should.eql('ccm');
    encryptedJSON.cipher.should.eql('aes');
    encryptedJSON.ct.should.exist;
    encryptedJSON.iv.should.exist;
  });

  it('Decrypts text', () =>{
    let encryptionTextBox = shallow(<EncryptionTextBox/>);
    encryptionTextBox.setState({text: meetMeInTheParkCT, decryptMode: true});
    encryptionTextBox.find('TouchableHighlight').simulate('press');
    encryptionTextBox.find("TextInput").props().value.should.eql('Meet me in the park');
  });
  
});
