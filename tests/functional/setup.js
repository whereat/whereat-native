var wd = require("wd");
var path = require("path");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = chai.should();
var expect = chai.expect();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

const androidCapabilities = {
    app: path.resolve(__dirname, "../../android/app/build/outputs/apk/app-debug.apk"),
    browserName: '',
    'appium-version': '1.5.0',
    platformName: 'Android',
    platformVersion: '5.1.0',
    deviceName: "Android Emulator"
};

exports.androidCapabilities = androidCapabilities;
exports.should = should;
exports.expect = expect;
exports.wd = wd;