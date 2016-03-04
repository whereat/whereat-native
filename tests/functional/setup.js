var wd = require("wd");
var path = require("path");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = chai.should();
var expect = chai.expect();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

exports.should = should;
exports.expect = expect;
exports.path = path;
exports.wd = wd;