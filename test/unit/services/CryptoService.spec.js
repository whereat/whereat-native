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
