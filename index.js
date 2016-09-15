'use strict';

module.exports = {
  extends: [
    'google',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  rules: {
    "max-len": ["error", 120],
    "require-jsdoc": "off"
  }
};
