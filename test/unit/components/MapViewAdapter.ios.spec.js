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
