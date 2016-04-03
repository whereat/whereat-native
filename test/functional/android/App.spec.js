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

import {
  wd,
  expect,
  should,
  androidCapabilities
} from "./../.setup";

import { initialState as initLocation } from '../../../src/reducers/userLocation';

describe("App", () => {
  var driver;

  before(() => {
    driver = wd.promiseChainRemote({host: 'localhost', port: 4723});
    return driver.init(androidCapabilities).setImplicitWaitTimeout(20000);
  });

  after(() => driver.quit());

  describe("Layout", () => {

    it("should display a map", () => {
      return driver
        .elementByXPath('//android.view.View')
        .should.eventually.exist;
    });

    it("should display default initial userLocation", () => {
      return driver
        .elementByXPath('//android.widget.TextView[1]')
        .text().should.become(`LATITUDE: ${initLocation.latitude}\n`)

        .elementByXPath('//android.widget.TextView[2]')
        .text().should.become(`LONGITUDE: ${initLocation.longitude}\n`);
    });
  });

  describe("UserLocation updates", () => {

    it('changes displayed location when GPS location changes', () => {
      return driver
        .setGeoLocation(10, 10, 0)

        .elementByXPath('//android.widget.TextView[1]')
        .text().should.become('LATITUDE: 10\n')
        .elementByXPath('//android.widget.TextView[2]')
        .text().should.become('LONGITUDE: 10\n')

        .setGeoLocation(20, 20, 0)

        .elementByXPath('//android.widget.TextView[1]')
        .text().should.become('LATITUDE: 20\n')
        .elementByXPath('//android.widget.TextView[2]')
        .text().should.become('LONGITUDE: 20\n');
    });
  });

  describe('Cryptographic Functionality', () => {
    it('calculates & displays hmac of latlng when location changes', () => {

      return driver
        .setGeoLocation(10,10, 0)

        .elementByXPath('//android.widget.TextView[3]')
        .text().should.become('e4573a4994b4b2a846b83178eb3aea9f060893bdffed49e8b115d1093d02a168')

        .setGeoLocation(20, 20, 0)
        .elementByXPath('//android.widget.TextView[3]')
        .text().should.become('b769476a42397ea08a4dde6d45c5ee7eef286eb738ffb597ac676cff6fc6a207');
    });

    describe('EncryptionTextBox', () => {
      it('contains initial state and can toggle between encrypt & decrypt modes', () => {
        return driver
          .elementByXPath('//android.widget.EditText[1]')
          .text().should.become('Type your secret message here')
          .elementByXPath('//android.view.ViewGroup[1]/android.widget.TextView[1]')
          .text().should.become('encrypt')
          .elementByXPath('//android.widget.Switch[1]')
          .text().should.become('OFF')

          .elementByXPath('//android.widget.Switch[1]').tap()
          .elementByXPath('//android.widget.Switch[1]')
          .text().should.become('ON')
          .elementByXPath('//android.view.ViewGroup[1]/android.widget.TextView[1]')
          .text().should.become('decrypt');
      });
    });
  
  });
  
});


