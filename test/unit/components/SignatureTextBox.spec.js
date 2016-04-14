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
