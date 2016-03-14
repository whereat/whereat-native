import { expect, deep } from "chai"
import chai from 'chai';
chai.should();
import { zucotti, nyse } from '../../../support/sampleLocations';

import * as location from '../../../../src/redux/modules/location';

describe("location redux module" , () => {

  describe("action creators", () => {

    it("should create action of type LOCATION_CHANGED, setting location property", () => {

      location.locationChanged(zucotti).should.eql({
        type: location.LOCATION_CHANGED,
        payload: zucotti
      });
    });
  });

  describe("reducers", () => {

    describe("default state", () => {

      it('returns specified initial state by default', () => {
        location.reducer(undefined, {}).should.eql(location.initialState);
      });
    });

    describe("on LOCATION_CHANGED", () => {

      it("should overwrite currentLocation with new latitude and longitude", () => {

        const secondState = location.reducer(location.initialState, {
          type: location.LOCATION_CHANGED,
          payload: zucotti
        });

        secondState.should.eql(zucotti);

        const thirdState = location.reducer(secondState, {
          type: location.LOCATION_CHANGED,
          payload: nyse
        });

        thirdState.should.eql(nyse);
      });

      it("should work with undefined state", () => {

        const newState = location.reducer(undefined, {
          type: location.LOCATION_CHANGED,
          payload: zucotti
        });

        newState.should.eql(zucotti);
      });
    });

    describe("on unrecognized type", () => {

      it("should not change state", () => {
        const state = { aProperty: 3};
        const action = { type: "unrecognized", aProperty: 4};

        location.reducer(state, action).should.eql(state);
      });
    });
  });
});