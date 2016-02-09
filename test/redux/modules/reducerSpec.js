import chai from 'chai';
let should = chai.should();

import reducer from '~/redux/modules/reducer';
import {createStore} from 'redux';

const subReducers = [
	{key:'location', value:{}}
]

describe("reducer", () => {
	subReducers.forEach((subReducer) => {
		it(`should have initial ${subReducer.key} key with ${subReducer.value} value`, () => {
			const initialState = createStore(reducer).getState();

			initialState.should.include.key(subReducer.key);
			initialState[subReducer.key].should.deep.equal(subReducer.value);
		});
	});
});