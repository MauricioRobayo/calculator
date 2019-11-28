module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};


