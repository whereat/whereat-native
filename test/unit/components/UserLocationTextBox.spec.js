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

import chai from 'chai';
chai.should();

import React, { View } from "react-native";
import { shallow } from "enzyme";

import { zucotti } from '../../support/sampleLocations';

import Root from "../../../src/components/Root";
import UserLocationTextBox from '../../../src/components/UserLocationTextBox';
import MapView from "../../../src/components/MapView.android.js";

describe('UserLocationTextBox component', () => {

  it("displays user's current location", () => {
    let textBox = shallow(<UserLocationTextBox userLocation={zucotti}/>);
    textBox.find("Text").at(0).children().node.should.contain(`LATITUDE: ${zucotti.latitude}`);
    textBox.find("Text").at(1).children().node.should.contain(`LONGITUDE: ${zucotti.longitude}`);
  });
});
