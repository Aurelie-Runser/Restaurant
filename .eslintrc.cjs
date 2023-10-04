/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': 'error', // empeche de faire des commits/push avec des console.log pour éviter de publier son site avec des console.log
    indent: ['error', 2], // force a faire des indentations de 4
    'vue/html-indent': ['error', 2]
  }
}
