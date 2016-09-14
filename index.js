'use strict';

module.exports = {
  extends: 'google',
  plugins: [
    "eslint-plugin-import"
  ],
  rules: {
    "max-len": ["error", 120],
    "require-jsdoc": "off"
  }
};
