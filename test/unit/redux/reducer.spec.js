import chai from 'chai';
chai.should();

import {createStore} from 'redux';
import reducer from '../../../src/redux/reducer';

import { initialState as initialLocation } from '../../../src/redux/modules/userLocation';
const subReducers = [{
  key: 'userLocation',
  value: initialLocation
}];

describe("reducer", () => {

  subReducers.forEach((subReducer) => {

    it(`should have initial ${subReducer.key} key with ${subReducer.value} value`, () => {
      const initialState = createStore(reducer).getState();

      initialState.should.include.keys(subReducer.key);
      initialState[subReducer.key].should.eql(subReducer.value);
    });
  });
});
