/**
  This file is for any setup functionality before any tests are executed
  README: https://facebook.github.io/jest/docs/api.html#config-setuptestframeworkscriptfile-string
*/

// Turn auto-mocking off. We'll mock everything out purposefully for the sake of increased determinism and clarity
jest.autoMockOff();

const should = require('chai').should();
