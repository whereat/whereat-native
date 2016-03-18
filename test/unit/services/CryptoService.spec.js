import chai from "chai";
chai.should();

import { createHmac, hmacLoc } from '../../../src/services/CryptoService';
import { zucotti } from '../../support/sampleLocations';
import { zucottiHmac } from '../../support/cryptoStrings';

describe('CryptoService', () => {

  describe('createHmac', () => {

    const whereatHmac = 'f290f7866e18c788e5cb610f3468f60ba778b1ffc06b3b2a799d753f7e65d145';
  
    it('computes the hmac for the string "whereat"', () => {
      createHmac('whereat').should.eql(whereatHmac);
    });

  });

  describe('hmacLoc', () => {

    it('computes the hmac for locational data', () => {
      hmacLoc(zucotti).should.eql(zucottiHmac);
    });
  });

});
