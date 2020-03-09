/* eslint-disable import/no-commonjs */
module.exports = () => ({
  autoDetect: true,
  files: ['src/**/*.{js,ts}?(x)', '!src/**/*.test.{js,ts}?(x)', '!node_modules'],
  tests: ['src/**/*.test.{js,ts}?(x)', '!node_modules'],
  maxConsoleMessagesPerTest: 100,
})
