import chai from 'chai';
const should = chai.should();

import React, { View } from "react-native";
import { shallow } from "enzyme";

import { zucotti } from '../../support/sampleLocations';

import Root from "../../../src/components/Root";
import SignatureTextBox from '../../../src/components/SignatureTextBox';

describe('HmacTextBox component', () => {

  it("displays the signature of the user's  location", () => {
    let textBox = shallow(<SignatureTextBox userLocation={zucotti}/>);
    let signature = JSON.parse(textBox.find('Text').props().children);
    
    signature.fields.should.include.members(['latitude', 'longitude']);
    should.exist(signature.hmac);
    signature.hmac.should.have.lengthOf(64);
    
  });

});
