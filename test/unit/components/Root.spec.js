import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.should();
chai.use(sinonChai);

import { makeFakeDom } from '../../support/FakeDom';

import React, { View } from "react-native";
import { shallow, render, mount } from "enzyme";
import { createStore } from 'redux';
import reducer from '../../../src/redux/reducer';
import { userLocationChanged } from '../../../src/redux/modules/userLocation';

import App from '../../../src/containers/App';
import Root from "../../../src/components/Root";
import UserLocationTextBox from '../../../src/components/UserLocationTextBox';
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
    mount(<Root userLocationChanged={sinon.spy()}/>);

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
