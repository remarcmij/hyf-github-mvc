module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  globals: {
    axios: 'readonly',
  },
  rules: {
    'no-console': 'off',
    'no-var': 'error',
    'prefer-const': 'off',
    'no-useless-computed-key': 'error',
    eqeqeq: 'error',
  },
};
