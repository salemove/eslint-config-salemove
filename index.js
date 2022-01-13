'use strict';

module.exports = {
  extends: [
    'google',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: [
    "no-only-tests",
    "no-unsanitized"
  ],
  rules: {
    "max-len": ["error", 120],
    "require-jsdoc": "off",
    "no-only-tests/no-only-tests": "error",
    "quotes": ["error", "single", {avoidEscape: true}],
    "no-unsanitized/method": "error",
    "no-unsanitized/property": "error"
  },
  overrides: [
    {
      "files": ["test/**", "stories/**"],
      "rules": {
        "no-unsanitized/method": "off",
        "no-unsanitized/property": "off"
      }
    }
  ]
};
