/**
 * Tests dependencies.
 */

const test = require('tape')
const union = require('../union')

test('should union two nodes given their ids', assert => {
  assert.plan(1)
  const ids = [0, 1, 2, 3, 4, 5]
  union(ids, 2, 3)
  assert.deepEqual(ids, [0, 1, 3, 3, 4, 5])
})
