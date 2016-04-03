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
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

import React, { DeviceEventEmitter } from "react-native";

import {
  FREQUENCY,
  DISTANCE,
  ACCURACY,
  startLocationPolling,
  onLocationChanged
} from "../../../src/services/LocationService.android";

describe("LocationService", () => {

  const locationProvider = React.NativeModules.LOSTLocationProvider;

  describe("#startLocationPolling", () => {

    it("should start location polling with correct parameters", () =>{
      const startPolling = sinon.stub(locationProvider, 'startLocationPolling');
      startLocationPolling();

      startPolling.should.have.been.calledWith(FREQUENCY, DISTANCE, ACCURACY);
      startPolling.restore();
    });
  });

  describe('#onLocationChanged', () => {

    it("should register a callback to handle 'location_changed' events", () => {
      const spy = sinon.spy();
      startLocationPolling();
      onLocationChanged(spy);

      DeviceEventEmitter.emit('location_changed');
      DeviceEventEmitter.emit('location_changed');

      spy.should.have.been.calledTwice;
    });
  });
});
