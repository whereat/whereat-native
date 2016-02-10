jest.autoMockOff();

describe("reducer", () => {
  const should = require('chai').should();
  const reducer = require('../../../src/redux/modules/reducer');
  const {createStore} = require('redux');

  const subReducers = [
    {key:'location', value:{}}
  ]

	subReducers.forEach((subReducer) => {
		it(`should have initial ${subReducer.key} key with ${subReducer.value} value`, () => {
			const initialState = createStore(reducer).getState();

			initialState.should.include.key(subReducer.key);
			initialState[subReducer.key].should.deep.equal(subReducer.value);
		});
	});
});