module.exports = function (wallaby) {
  return {
    files: ['src/**/*.js'],
    tests: ['test/**/*.test.js'],
    env: {
      type: 'node'
    },
    testFramework: 'ava'
  }
}
