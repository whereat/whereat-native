import {
  wd,
  expect,
  should,
  androidCapabilities
} from "./../.setup"

import { initialState } from '../../../src/redux/modules/location';
const { location: initLocation } = initialState;

describe("App", () => {
  var driver;

  before(() => {
    driver = wd.promiseChainRemote({host: 'localhost', port: 4723});
    return driver.init(androidCapabilities).setImplicitWaitTimeout(20000);
  });

  after(() => driver.quit());

  describe("Display", () => {

    it("should display a map", () => {
      return driver
        .elementByXPath('//android.view.View')
        .should.eventually.exist
    });

    it("should display default initial location", () => {
      return driver
        .elementByXPath('//android.widget.TextView[1]')
        .text().should.become(`LATITUDE: ${initLocation.latitude}\n`)

        .elementByXPath('//android.widget.TextView[2]')
        .text().should.become(`LONGITUDE: ${initLocation.longitude}\n`)

        .elementByXPath('//android.widget.TextView[3]')
        .text().should.become(`LAST UPDATED TIME: ${initLocation.lastUpdatedTime}`)
    });
  });

  describe("Location updates", () => {

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
        .text().should.become('LONGITUDE: 20\n')

        .setGeoLocation(30, 30, 0)

        .elementByXPath('//android.widget.TextView[1]')
        .text().should.become('LATITUDE: 30\n')
        .elementByXPath('//android.widget.TextView[2]')
        .text().should.become('LONGITUDE: 30\n')
    });
  });

});


