import test from 'ava'

import transformDirectory from './index'

test('transformDirectory is a function', (t) => {
  t.is(typeof transformDirectory, 'function')
})
