import { expect, deep } from "chai"
import chai from 'chai';
chai.should();
import { zucotti, nyse } from '../../../support/sampleLocations';

import * as userLocation from '../../../../src/redux/modules/userLocation';

describe("userLocation redux module" , () => {

  describe("action creators", () => {

    it("should create action of type USER_LOCATION_CHANGED, setting userLocation property", () => {

      userLocation.userLocationChanged(zucotti).should.eql({
        type: userLocation.USER_LOCATION_CHANGED,
        payload: zucotti
      });
    });
  });

  describe("reducers", () => {

    describe("default state", () => {

      it('returns specified initial state by default', () => {
        userLocation.reducer(undefined, {}).should.eql(userLocation.initialState);
      });
    });

    describe("on USER_LOCATION_CHANGED", () => {

      it("should overwrite currentLocation with new latitude and longitude", () => {

        const secondState = userLocation.reducer(userLocation.initialState, {
          type: userLocation.USER_LOCATION_CHANGED,
          payload: zucotti
        });

        secondState.should.eql(zucotti);

        const thirdState = userLocation.reducer(secondState, {
          type: userLocation.USER_LOCATION_CHANGED,
          payload: nyse
        });

        thirdState.should.eql(nyse);
      });

      it("should work with undefined state", () => {

        const newState = userLocation.reducer(undefined, {
          type: userLocation.USER_LOCATION_CHANGED,
          payload: zucotti
        });

        newState.should.eql(zucotti);
      });
    });

    describe("on unrecognized type", () => {

      it("should not change state", () => {
        const state = { aProperty: 3};
        const action = { type: "unrecognized", aProperty: 4};

        userLocation.reducer(state, action).should.eql(state);
      });
    });
  });
});
