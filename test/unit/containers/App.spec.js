<<<<<<< HEAD
import chai from 'chai';
chai.should();

import React, { View } from "react-native";
import { createStore } from 'redux';
import { shallow } from "enzyme";
import reducer from '../../../src/redux/reducer';

import Root from "../../../src/components/Root";
import App from '../../../src/containers/App';

describe('App container', () => {

  const store = createStore(reducer);
  const app = shallow(<App store={store}/>);
  const state = store.getState();

  it('maps state to props', () => {
    app.find('Root').prop('userLocation').should.eql(state.userLocation);
  });

  it('maps dispatch to props', () => {
    app.find('Root').prop('userLocationChanged').should.exist;
=======
import React, { View } from "react-native";
import { shallow } from "enzyme";
import MapViewAdapter from "../../../src/components/MapViewAdapter.android";
import { expect } from "chai"
import { App } from "../../../src/containers/App"

describe("App", () => {
  let app;

  beforeEach(() => {
    app = shallow(<App/>);
  });

  describe("LocationProvider", () => {
    it("should have user's current location", () => {
      var userLocationView = app.find("View").at(1);
      expect(userLocationView.find("Text").at(0).children().node).to.contain("LATITUDE: 0");
      expect(userLocationView.find("Text").at(1).children().node).to.contain("LONGITUDE: 0");
      expect(userLocationView.find("Text").at(2).children().node).to.contain("LAST UPDATED TIME: 0");
    });
  });

  describe("MapViewAdapter", () => {
    it("should have a MapViewAdapter", () => {
      expect(app.find(MapViewAdapter)).to.exist;
    });
>>>>>>> [#M167] - BM/AD - Remove lastUpdatedTime from app state. Refactor MapView logic into MapViewAdapter. Add tests
  });
});
