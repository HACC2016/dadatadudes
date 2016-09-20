module.exports = {
  'env': {
    'es6': true,
    'meteor': true,
    'node': true,
    'browser': true
  },
  'extends': 'airbnb',
  'ecmaFeatures': {
      'sourceType': 'module',
      'jsx': true,
      'modules': true,
      'experimentalObjectRestSpread': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module'
  },
  'plugins': [],
  'globals': {
    'Kadira': true,
    'moment': true,
    'SimpleSchema': true,
    'ServiceConfiguration': true,
    'uuid': true,

    // Testing
    'describe': true,
    'it': true,
    'beforeEach': true,
    'before': true,
    'afterEach': true,
    'after': true,
    'expect': true,
    'assert': true,
    'browser': true,
    'server': true,

    // //Collections
    'Handlebars': true,

    // Comprendio
    'Intercom': true
  },
  'rules': {
    'arrow-body-style': [ 0 ],
    'comma-dangle': [ 2, 'never' ],
    'computed-property-spacing': [ 2, 'always' ],
    'eqeqeq': [ 2, 'smart' ],
    'indent': [ 2, 2, { 'VariableDeclarator': 2 } ],
    'linebreak-style': [ 2, 'unix' ],
    'no-console': [ 0 ],
    'no-underscore-dangle': [ 0 ],
    'no-unneeded-ternary': [ 2 ],
    'no-underscore-dangle': [ 0 ],
    'object-curly-spacing': [ 2, 'always' ],
    'quotes': [ 2, 'single' ],
    'semi': [ 2, 'always' ],
    'space-infix-ops': [ 2 ],
    'import/no-unresolved': "off",
    'new-cap': 'off',
    'prefer-stateless-function': 'off',
    'react/prefer-stateless-function': 'off',
    'no-useless-constructor': 'off',
    'react/jsx-boolean-value': 0
  }
};
