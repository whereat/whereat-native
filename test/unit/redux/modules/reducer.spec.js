import { expect, deep } from "chai";

describe("reducer", () => {
  const {createStore} = require('redux');
  const reducer = require('../../../../src/redux/modules/reducer').default;


  const subReducers = [
    {
      key: 'location', value: {}
    }
  ]

  subReducers.forEach((subReducer) => {
    it(`should have initial ${subReducer.key} key with ${subReducer.value} value`, () => {
      const initialState = createStore(reducer).getState();

      expect(initialState).to.include.keys(subReducer.key);
      expect(initialState[subReducer.key]).to.deep.equal(subReducer.value);
    });
  });
});