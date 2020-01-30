const eslintConfig = require('./.eslintrc.js')
const es5 = eslintConfig.settings.minSupportedEcmaVersion <= 5
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  useTabs: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: es5 ? 'es5' : 'all',
  arrowParens: 'avoid',
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
}
