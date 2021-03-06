module.exports = {
    env: {
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
      },
      sourceType: 'module',
      ecmaVersion: 2017
    }
  };