/**
 * Tests dependencies.
 */

const test = require('tape')
const union = require('../union')
const find = require('../find')

test('should union two nodes given their ids', assert => {
  assert.plan(1)
  const ids = [0, 1, 2, 3, 4, 5]
  union(ids, 2, 3)
  assert.deepEqual(ids, [0, 1, 3, 3, 4, 5])
})

test('should union one node with an other one that belong to a component', assert => {
  assert.plan(1)
  const ids = [0, 1, 2, 3, 4, 5]
  union(ids, 2, 3)
  union(ids, 3, 5)
  assert.deepEqual(ids, [0, 1, 5, 5, 4, 5])
})

test('should find two connect nodes', assert => {
  assert.plan(2)
  const ids = [0, 1, 2, 3, 4, 5]
  assert.equal(find(ids, 3, 5), false)
  union(ids, 3, 5)
  assert.equal(find(ids, 3, 5), true)
})
