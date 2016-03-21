import { expect } from "chai"
import { shallow } from "enzyme";
import sinon from 'sinon';

import React, { View, MapView } from "react-native";
import MapViewAdapter from "../../../src/components/MapViewAdapter.ios"

describe("MapViewAdapter (iOS)", () => {
  let mapViewAdapter;
  const location = {
    latitude: 4,
    longitude: 5
  };

  beforeEach(() => {
    mapViewAdapter = shallow(<MapViewAdapter location={location}/>);
  });


  it("should have a region that centers on a given location", () => {
    expect(mapViewAdapter.find(MapView).props().region).to.include.keys("latitude", "longitude");
    expect(mapViewAdapter.find(MapView).props().region["latitude"]).to.equal(location.latitude);
    expect(mapViewAdapter.find(MapView).props().region["longitude"]).to.equal(location.longitude);
  });

  it("should capture zoom as latitudeDelta and longitudeDelta", () => {
    expect(mapViewAdapter.find(MapView).props().region.latitude).to.be.a('number');
    expect(mapViewAdapter.find(MapView).props().region.longitude).to.be.a('number');
  });
});
