import chai from 'chai';
chai.should();

import { zucotti, nyse } from '../../support/sampleLocations';
import userLocation, { initialState } from '../../../src/reducers/userLocation';

describe("userLocation reducers" , () => {

  describe("default state", () => {

    it('returns specified initial state by default', () => {
      userLocation(undefined, {}).should.eql(initialState);
    });
  });

  describe("on USER_LOCATION_CHANGED", () => {

    it("should overwrite currentLocation with new latitude and longitude", () => {

      const secondState = userLocation(initialState, {
        type: 'USER_LOCATION_CHANGED',
        payload: zucotti
      });

      secondState.should.eql(zucotti);

      const thirdState = userLocation(secondState, {
        type: 'USER_LOCATION_CHANGED',
        payload: nyse
      });

      thirdState.should.eql(nyse);
    });

    it("should work with undefined state", () => {

      const newState = userLocation(undefined, {
        type: 'USER_LOCATION_CHANGED',
        payload: zucotti
      });

      newState.should.eql(zucotti);
    });
  });

  describe("on unrecognized type", () => {

    it("should not change state", () => {
      const state = { aProperty: 3};
      const action = { type: "unrecognized", aProperty: 4};

      userLocation(state, action).should.eql(state);
    });
  });
});

