// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    //'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    //'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "max-len": ["error", 120],
    "no-console": 0,
    "no-use-before-define": 0,
    "no-bitwise": 0,
    "react/prefer-stateless-function": 0,
    "camelcase": 1,
    "eqeqeq": 1,
    "no-unused-vars": 1,
  }
}
