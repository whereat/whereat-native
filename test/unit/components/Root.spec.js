import chai from 'chai';
chai.should();

import React, { View } from "react-native";
import { shallow, render } from "enzyme";

import Root from "../../../src/components/Root";
import LocationTextBox from '../../../src/components/LocationTextBox';
import MapView from "../../../src/components/MapView.android.js";

describe("Root component", () => {

  describe("layout", () => {

    describe('LocationTextBox', () => {

      const root = shallow(<Root/>);

      it('should exist', () => {
        root.find(LocationTextBox).is("LocationTextBox").should.be.true;
      });

      it('should have user location props', () => {
        const textBox = root.find(LocationTextBox);
        textBox.props().should.include.keys('location');
        textBox.props().location.should.include.keys('latitude', 'longitude');
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
