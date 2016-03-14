import { expect } from "chai"
import { shallow } from "enzyme";

import React from "react-native";
import MapView from "../../../src/components/MapView.android";
import MapViewAdapter from "../../../src/components/MapViewAdapter.android"

describe("MapViewAdapter", () => {
  let mapViewAdapter;
  const location = {
    latitude: 4,
    longitude: 5
  };

  beforeEach(() => {
    mapViewAdapter = shallow(<MapViewAdapter location={location}/>);
  });

  it("should have an OsmDroidMapView", () => {
    expect(mapViewAdapter.find(MapView).is("OsmDroidMapView")).to.equal(true);
  });

  it("should have a center", () => {
    expect(mapViewAdapter.find(MapView).props().center).to.include.keys("lat", "lon");
    expect(mapViewAdapter.find(MapView).props().center["lat"]).to.equal(location.latitude);
    expect(mapViewAdapter.find(MapView).props().center["lon"]).to.equal(location.longitude);
  });

  it("should have a zoom level", () => {
    expect(mapViewAdapter.find(MapView).props().zoom).to.be.a('number');
  });
});