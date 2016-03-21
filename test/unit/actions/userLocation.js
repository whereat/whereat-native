import chai from 'chai';
chai.should();

import { zucotti, nyse } from '../../support/sampleLocations';
import { userLocationChanged } from '../../../src/actions/userLocation';

describe('userLocation action creators', () => {

  describe('#userLocationChanged', () => {

    it("should create action of type USER_LOCATION_CHANGED, with a Location payload", () => {

      userLocationChanged(zucotti).should.eql({
        type: 'USER_LOCATION_CHANGED',
        payload: zucotti
      });

      userLocationChanged(nyse).should.eql({
        type: 'USER_LOCATION_CHANGED',
        payload: nyse
      });
    });
  });
});