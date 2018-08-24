const test = require('ava')

const transformDirectory = require('./index')

test('transformDirectory is a function', (t) => {
  t.is(typeof transformDirectory, 'function')
})
