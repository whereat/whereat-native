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

