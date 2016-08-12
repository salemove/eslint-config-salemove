# eslint-config-salemove

ESLint [shareable
config](http://eslint.org/docs/developer-guide/shareable-configs.html)


## Install

```
$ npm install --save-dev eslint eslint-config-salemove
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  },
  "eslintConfig": {
    "extends": "salemove"
  }
}
```

Then lint with `$ npm run lint`.
