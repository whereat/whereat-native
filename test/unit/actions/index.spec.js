import chai from 'chai';
chai.should();

import actions from '../../../src/actions/index';
import * as userLocationActions from '../../../src/actions/userLocation';

describe('action creator index', () => {

  it('exports a correctly shaped action tree', () => {
    actions.should.contain.all.keys(userLocationActions);
  });
});