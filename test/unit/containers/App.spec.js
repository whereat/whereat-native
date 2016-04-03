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
import { createStore } from 'redux';
import { shallow } from "enzyme";
import reducers from '../../../src/reducers/index';

import Root from "../../../src/components/Root";
import App from '../../../src/containers/App';

describe('App container', () => {

  const store = createStore(reducers);
  const app = shallow(<App store={store}/>);
  const state = store.getState();

  it('maps state to props', () => {
    app.find('Root').prop('userLocation').should.eql(state.userLocation);
  });

  it('maps dispatch to props', () => {
    app.find('Root').prop('userLocationChanged').should.exist;
  });
});
