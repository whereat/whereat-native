import chai from 'chai';
chai.should();

import React, { View } from "react-native";
import { shallow, render } from "enzyme";

import Root from "../../../src/components/Root";
import UserLocationTextBox from '../../../src/components/UserLocationTextBox';
import MapView from "../../../src/components/MapView.android.js";

describe("Root component", () => {

  describe("layout", () => {

    describe('UserLocationTextBox', () => {

      const root = shallow(<Root/>);

      it('should exist', () => {
        root.find(UserLocationTextBox).is("UserLocationTextBox").should.be.true;
      });

      it('should have user location props', () => {
        const textBox = root.find(UserLocationTextBox);
        textBox.props().should.include.keys('userLocation');
        textBox.props().userLocation.should.include.keys('latitude', 'longitude');
      });
    });

    describe("MapView", () => {

      const root = shallow(<Root/>);

      it("should exist", () => {
        root.find(MapView).is("OsmDroidMapView").should.be.true;
      });

      it("should have center", () => {
        root.find(MapView).props().center.should.include.keys("lat", "lon");
      });

      it("should have zoom level", () => {
        root.find(MapView).props().zoom.should.be.a('number');
      });
    });
  });
});
