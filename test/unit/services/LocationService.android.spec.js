import React, { View } from "react-native";
import sinon from 'sinon';
import { expect } from "chai"
import { shallow } from "enzyme";
import LocationService from "../../../src/services/LocationService.android";

describe("LocationService", () => {
  describe("#startLocationPolling", () => {
    let LOSTMock, DeviceEventEmitterMock;
    const time = 500, distance = 0.1;
    beforeEach(() => {
      LOSTMock = sinon.mock(React.NativeModules.LOSTLocationProvider);
      DeviceEventEmitterMock = sinon.mock(React.DeviceEventEmitter);
    });
    afterEach(() => {
      LOSTMock.restore();
      DeviceEventEmitterMock.restore();
    });

    it("should start location polling with time and distance", () =>{
      const LOSTExpectation = LOSTMock
        .expects('startLocationPolling')
        .withArgs(time, distance);

      LocationService.startLocationPolling(time, distance)

      LOSTExpectation.verify();
    });

    it("should add a listener for 'location_changed' on DeviceEventEmitter", () => {
      const DeviceEventEmitterExpectation = DeviceEventEmitterMock
        .expects('addListener')
        .withArgs('location_changed');

      LocationService.startLocationPolling(time);

      DeviceEventEmitterMock.verify();
    }); 
  });

});