import chai from 'chai';
chai.should();

import React, { View } from "react-native";
import { shallow } from "enzyme";

import { zucotti } from '../../support/sampleLocations';

import Root from "../../../src/components/Root";
import LocationTextBox from '../../../src/components/LocationTextBox';
import MapView from "../../../src/components/MapView.android.js";

describe('LocationTextBox component', () => {

  it("displays user's current location", () => {
    let textBox = shallow(<LocationTextBox location={zucotti}/>);
    textBox.find("Text").at(0).children().node.should.contain(`LATITUDE: ${zucotti.latitude}`);
    textBox.find("Text").at(1).children().node.should.contain(`LONGITUDE: ${zucotti.longitude}`);
  });
});