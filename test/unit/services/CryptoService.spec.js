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

import chai from "chai";
const should = chai.should();

import { encrypt, decrypt, sign, verify, getKey } from '../../../src/services/CryptoService';
import { heyWhereAtCT } from '../../support/cryptoStrings';

import sjcl from "../../../lib/sjcl";
const { 
  codec: { utf8String: { toBits }, hex: { fromBits } }, 
  misc: { hmac } 
} = sjcl;

describe('CryptoService', () => {

  describe('encrypt', () => {

    it('returns encrypted json string', () => {
      let key = toBits('shared secret');
      encrypt(key, 'hey, where at?', {"iv":"yhgvpSW8b+oPkHvHGlMJCQ=="}).should.eql(heyWhereAtCT);
    });

  });

  describe('decrypt', () => {
    
    it('decrypts provided string', () => {
      let key = toBits('shared secret');
      decrypt(key,heyWhereAtCT).should.eql('hey, where at?');
    });

  });

  describe('sign', () => {
    let data = {'one': 'where', 'two': 'at'};
    let key = toBits('shared secret');
    let hmacer = new hmac(key);
          
    it('returns an object with the correct fields: {sig: {fields: [], hmac: string}}', () => {
      sign(key, data).sig.should.have.all.keys(['fields', 'hmac']);
      sign(key, data).sig.fields.should.be.a('array');
      sign(key, data).sig.hmac.should.be.a('string');
    });

    it('fields arrray contains the keys', () => {
      sign(key, data).sig.fields.should.include('one');
      sign(key, data).sig.fields.should.include('two');
    });

    it('hmacs correctly', () => {
      // note: sign doesn't guarantee a consistent ordering of the keys, therefore there are two, in this case, possible hmacs
      let hmac1 = fromBits(hmacer.encrypt('whereat'));
      let hmac2 = fromBits(hmacer.encrypt('atwhere'));
      sign(key, data).sig.hmac.should.be.oneOf([hmac1, hmac2]);
    });

    it('hmacs correctly when given numbers as values', () =>{
      let data_with_numbers = {'one': 123, 'two': 456};
      let hmac1 = fromBits(hmacer.encrypt('123456'));
      let hmac2 = fromBits(hmacer.encrypt('456123'));
      sign(key, data_with_numbers).sig.hmac.should.be.oneOf([hmac1, hmac2]);
    });

  });

  describe('verify', () => {
    it('returns the id the key', () => {
      let message = {
        lat: 22.5,
        lng: -32.1,
        ttl: 10,
        sig: {
          fields: ['ttl', 'lat', 'lng'],
          hmac: fromBits(new hmac(toBits('key1')).encrypt('1022.5-32.1'))
        }
      };
      
      verify(message).should.eql('key1');
      
    });

    it('returns a blank string if it could not verify the message', () => {
      let message = {
        lat: 22.5,
        lng: -32.1,
        ttl: 10,
        sig: {
          fields: ['ttl', 'lat', 'lng'],
          hmac: "IamAnAttackerAndThisIsMyFakeHmac"
        }
      };      

      verify(message).should.eql('');
      
    });

  });

  describe('getKey', ()=>{
    it('returns the key for the given id',() =>{
      getKey('key1').should.eql(toBits('key1'));
      getKey('me').should.eql(toBits('shared secret'));
          
    });
    it('returns undefined if the keyStore does not have the key', () =>{
      should.not.exist(getKey('notAKey'));
    });
    
  });

});
