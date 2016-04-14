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
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.should();
chai.use(sinonChai);

import { makeFakeDom } from '../../support/FakeDom';

import React, { View } from "react-native";
import { shallow, render, mount } from "enzyme";
import { createStore } from 'redux';
import actions from '../../../src/actions/index';

import App from '../../../src/containers/App';
import Root from "../../../src/components/Root";
import UserLocationTextBox from '../../../src/components/UserLocationTextBox';
import SignatureTextBox from '../../../src/components/SignatureTextBox';
import MapViewAdapter from "../../../src/components/MapViewAdapter.android.js";

import * as LocationService from '../../../src/services/LocationService.android'


describe("Root component", () => {

  describe("layout", () => {

    const root = shallow(<Root/>);

    describe('UserLocationTextBox', () => {

      it('should exist', () => {
        root.find(UserLocationTextBox).is("UserLocationTextBox").should.be.true;
      });

      it('should have user location props', () => {
        const textBox = root.find(UserLocationTextBox);
        textBox.props().should.include.keys('userLocation');
        textBox.props().userLocation.should.include.keys('latitude', 'longitude');
      });
    });

    describe('SignatureTextBox', () => {

      it('should exist', () => {
        root.find(SignatureTextBox).should.exist;
      });

      it('should have user location props', () => {
        const textBox = root.find(SignatureTextBox);
        textBox.props().should.include.keys('userLocation');
        textBox.props().userLocation.should.include.keys('latitude', 'longitude');
      });
    });
    describe("MapViewAdapter", () => {

      it("should exist", () => {
        root.find(MapViewAdapter).should.exist;
      });
    });
  });

  describe('event handlers', () => {

    makeFakeDom();
    const startLocationPolling = sinon.stub(LocationService, 'startLocationPolling');
    const onLocationChanged = sinon.stub(LocationService, 'onLocationChanged');
    mount(<Root />);

    it('starts location polling', () => {
      startLocationPolling.should.have.been.calledOnce;
      startLocationPolling.restore();
    });

    it('registers location changed callback', () => {
      onLocationChanged.should.have.been.calledOnce;
      onLocationChanged.restore();
    });
  });
});
