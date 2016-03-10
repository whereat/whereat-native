import React, { View } from "react";
import { shallow } from "enzyme";
import MapView from "../../../src/components/MapView.android.js";
import { expect } from "chai"
import { App } from "../../../src/containers/App"

describe("App", () => {

  it("should have user's current location", () => {
    let app = shallow(<App/>);
    var userLocationView = app.find("View").at(1);
    expect(userLocationView.find("Text").at(0).children().node).to.contain("LATITUDE: 0");
    expect(userLocationView.find("Text").at(1).children().node).to.contain("LONGITUDE: 0");
    expect(userLocationView.find("Text").at(2).children().node).to.contain("LAST UPDATED TIME: 0");
  });

  describe("MapView", () => {
    let app = shallow(<App/>);

    it("should exist", () => {
      expect(app.find(MapView).is("OsmDroidMapView")).to.equal(true);

    });

    it("should have center", () => {
      expect(app.find(MapView).props().center).to.include.keys("lat", "lon");
    });

    it("should have zoom level", () => {
      expect(app.find(MapView).props().zoom).to.be.a('number');
    });
  });
});
