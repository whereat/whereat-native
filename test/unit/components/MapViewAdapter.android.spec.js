/**
 *
 * Copyright (c) 2016-present, Total Location Test Paragraph.
 * All rights reserved.
 *
 * This file is part of Where@. Where@ is free software:
 * you can redistribute it and/or modify it under the terms of
 * the GNU General Public License (GPL), either version 3
 * of the License, or (at your option) any later version.
 *
 * Where@ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. For more details,
 * see the full license at <http://www.gnu.org/licenses/gpl-3.0.en.html>
 *
 */

import { expect } from "chai"
import { shallow } from "enzyme";

import React from "react-native";
import MapView from "../../../src/components/MapView.android";
import MapViewAdapter from "../../../src/components/MapViewAdapter.android"

describe("MapViewAdapter (Android)", () => {
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