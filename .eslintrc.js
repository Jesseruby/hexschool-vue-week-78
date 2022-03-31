module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'jsx-a11y/label-has-for': 'off',
    'spaced-comment': 'off',
    'comma-dangle': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'import/extensions': 'off',
  },
};
