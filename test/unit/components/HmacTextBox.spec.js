import chai from 'chai';
chai.should();

import React, { View } from "react-native";
import { shallow } from "enzyme";

import { zucotti } from '../../support/sampleLocations';
import { zucottiHmac } from '../../support/cryptoStrings';

import Root from "../../../src/components/Root";
import HmacTextBox from '../../../src/components/HmacTextBox';
import MapView from "../../../src/components/MapView.android.js";

describe('HmacTextBox component', () => {

  it("displays the hmac of the user's  location", () => {
    let textBox = shallow(<HmacTextBox userLocation={zucotti}/>);
    textBox.find('Text').node.props.children.should.eql(zucottiHmac);
  });

});
