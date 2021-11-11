/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-11 14:45:26
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-11 16:35:07
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 0,
    'space-before-function-paren': 0
  }
}
