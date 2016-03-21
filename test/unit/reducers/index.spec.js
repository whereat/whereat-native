import chai from 'chai';
chai.should();

import { createStore } from 'redux';
import reducers from '../../../src/reducers/index';

import userLocation, { initialState as initialLocation } from '../../../src/reducers/userLocation';

describe('reducer index', () => {

  it("generates a correctly shaped state tree", () => {
    createStore(reducers).getState().should.eql({
      userLocation: initialLocation
    });
  });
});
