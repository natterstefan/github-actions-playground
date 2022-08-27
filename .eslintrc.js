/* eslint-disable global-require */
/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: ['eslint-config-ns'],
  // NOTE: eslint-config-ns assumes jest is installed as well, that is why this
  // is required, I need to change that in my eslint-config in the future. :)
  settings: {
    jest: {
      version: 28,
    },
  },
}
