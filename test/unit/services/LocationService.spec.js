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
