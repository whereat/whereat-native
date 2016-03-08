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