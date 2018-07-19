'use strict';

module.exports = {
  extends: [
    'google',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: [
    "no-only-tests"
  ],
  rules: {
    "max-len": ["error", 120],
    "require-jsdoc": "off",
    "no-only-tests/no-only-tests": "error",
    "quotes": ["error", "single", {avoidEscape: true}]
  }
};
