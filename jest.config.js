/* eslint-disable import/no-commonjs */
const options = {
  preset: 'ts-jest/presets/js-with-ts',
}

let configFile
for (const loc of ['./tsconfig.json', './jsconfig.json']) {
  try {
    configFile = require(loc) // eslint-disable-line
  } catch {
    continue
  }

  const { baseUrl, paths } = configFile.compilerOptions || {}

  if (baseUrl) {
    options.moduleDirectories = ['node_modules', baseUrl]
  }
  if (paths) {
    const { pathsToModuleNameMapper } = require('ts-jest/utils') // eslint-disable-line
    options.moduleNameMapper = pathsToModuleNameMapper(paths)
  }

  break
}

module.exports = options
