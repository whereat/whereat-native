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

var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = chai.should();
var expect = chai.expect();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

const androidCapabilities = {
    browserName: '',
    'appium-version': '1.5.0',
    appPackage: "io.whereat.mobile",
    appActivity: ".MainActivity",
    platformName: 'Android',
    platformVersion: '5.1.0',
    deviceName: "Android Emulator"
};

exports.androidCapabilities = androidCapabilities;
exports.should = should;
exports.expect = expect;
exports.wd = wd;